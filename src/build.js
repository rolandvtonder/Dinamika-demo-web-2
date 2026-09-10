// Generates the static site into dist/: every page in Afrikaans (root) and English (/en/).
// Usage: node src/build.js   (the GitHub Pages workflow also sets BASE_PATH and SITE_URL)
import { mkdirSync, writeFileSync, readFileSync, readdirSync, copyFileSync, rmSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PAGES, LANGS, byId, fileFor, SITE_URL } from './site.js';
import { imageSize } from './lib/imgsize.js';
import { attrs } from './lib/util.js';
import { renderLayout } from './layout.js';

const SRC = dirname(fileURLToPath(import.meta.url));
const DIST = join(SRC, '..', 'dist');
// Path the site is served from, e.g. "/hoerskool-dinamika" on a GitHub Pages project site.
// Normal pages use relative links; only the 404 page (served from any path) needs this.
const BASE_PATH = (process.env.BASE_PATH || '').replace(/\/+$/, '');

const write = (file, content) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

// Collect renderers: each module in src/pages exports { pageId: (ctx) => ({ body, desc, image }) }.
const renderers = {};
for (const f of readdirSync(join(SRC, 'pages')).filter((f) => f.endsWith('.js')).sort()) {
  const mod = await import(pathToFileURL(join(SRC, 'pages', f)));
  for (const [id, fn] of Object.entries(mod.default)) {
    if (renderers[id]) throw new Error(`Duplicate renderer for "${id}" in ${f}`);
    renderers[id] = fn;
  }
}
const missing = PAGES.filter((p) => !renderers[p.id]).map((p) => p.id);
if (missing.length) throw new Error(`No renderer for: ${missing.join(', ')}`);

function makeCtx(lang, page, base = lang === 'af' ? '' : '../') {
  return {
    lang,
    page,
    base,
    // L('Afrikaans', 'English') or L({ af, en })
    L: (af, en) => (af && typeof af === 'object' ? af[lang] : lang === 'af' ? af : en),
    href(id, to = lang) {
      if (!byId[id]) throw new Error(`Unknown page "${id}" linked from "${page.id}"`);
      if (base.startsWith('/')) return `${base}${fileFor(id, to)}`;
      return (lang === to ? '' : to === 'en' ? 'en/' : '../') + `${byId[id].slug[to]}.html`;
    },
    asset: (p) => `${base}assets/${p}`,
    title: (id) => byId[id].title[lang],
    img(src, o = {}) {
      const { w, h } = imageSize(join(SRC, 'assets', 'img', src));
      return `<img${attrs({
        src: `${base}assets/img/${src}`,
        alt: o.alt ?? '',
        width: w,
        height: h,
        class: o.cls,
        style: o.style,
        sizes: o.sizes,
        loading: o.priority ? 'eager' : 'lazy',
        fetchpriority: o.priority ? 'high' : null,
        decoding: 'async',
      })}>`;
    },
  };
}

rmSync(DIST, { recursive: true, force: true });

let count = 0;
for (const lang of LANGS) {
  for (const page of PAGES) {
    const ctx = makeCtx(lang, page);
    write(join(DIST, fileFor(page.id, lang)), renderLayout(ctx, renderers[page.id](ctx)));
    count++;
  }
}

// 404 uses root-absolute URLs because hosts serve it from any path.
if (renderers['404']) {
  const page = { id: '404', parent: 'home', slug: { af: '404', en: '404' }, title: { af: 'Bladsy nie gevind nie', en: 'Page not found' } };
  const ctx = makeCtx('af', page, `${BASE_PATH}/`);
  write(join(DIST, '404.html'), renderLayout(ctx, renderers['404'](ctx)));
  count++;
}

// Assets: concatenate CSS, copy JS and images.
const cssDir = join(SRC, 'assets', 'css');
const css = readdirSync(cssDir).filter((f) => f.endsWith('.css')).sort()
  .map((f) => `/* ${f} */\n${readFileSync(join(cssDir, f), 'utf8')}`).join('\n');
write(join(DIST, 'assets', 'css', 'site.css'), css);

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const f of readdirSync(from)) {
    const s = join(from, f);
    if (statSync(s).isDirectory()) copyDir(s, join(to, f));
    else copyFileSync(s, join(to, f));
  }
}
copyDir(join(SRC, 'assets', 'js'), join(DIST, 'assets', 'js'));
copyDir(join(SRC, 'assets', 'img'), join(DIST, 'assets', 'img'));

// sitemap.xml with language alternates, robots.txt
const urls = PAGES.filter((p) => !p.noindex).map((p) => {
  const alts = LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${fileFor(p.id, l)}"/>`).join('');
  return LANGS.map((l) => `<url><loc>${SITE_URL}/${fileFor(p.id, l)}</loc>${alts}</url>`).join('\n');
});
write(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
write(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
// Tells GitHub Pages to serve the files as-is (no Jekyll processing).
write(join(DIST, '.nojekyll'), '');

// Link check: every relative href/src must point at a file that exists.
const broken = [];
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
for (const file of walk(DIST).filter((f) => f.endsWith('.html') && !f.endsWith('404.html'))) {
  const src = readFileSync(file, 'utf8');
  for (const [, url] of src.matchAll(/(?:href|src|data-full)="([^"#?]+)[^"]*"/g)) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(url)) continue;
    if (!existsSync(join(dirname(file), url))) broken.push(`${file.slice(DIST.length + 1)} -> ${url}`);
  }
}

console.log(`Built ${count} pages into dist/`);
if (broken.length) {
  console.error(`\n${broken.length} broken link(s):\n${[...new Set(broken)].slice(0, 40).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('Link check passed: all internal links and images resolve.');
}
