# Hoërskool Dinamika — webwerf / website

A bilingual (Afrikaans first, English second) static website for Hoërskool Dinamika, Brackenhurst, Alberton.
Layout inspired by hseldo.co.za, using Dinamika's own crest, navy + teal colours and content from the previous site (hsdinamika.com).

## Quick start

Requires Node.js 18+ (no packages to install).

```bash
npm run build     # generates every page into dist/
npm run serve     # preview at http://localhost:4173
```

`npm run dev` does both. Upload the contents of `dist/` to any web host (cPanel, Netlify, GitHub Pages…).
The pages also open straight from disk (double-click `dist/index.html`).

## Publish on GitHub Pages

Everything GitHub needs is in this folder:

- `src/`, `package.json`, `serve.js` and this README: the website's source.
- `.github/workflows/deploy.yml`: builds the site and publishes it every time you push.
- `.gitignore`: keeps `dist/` (rebuilt on GitHub), `medias/` (original photos, not needed by the site) and local settings out of the repository.
- `.gitattributes`: keeps line endings consistent between Windows and GitHub.

1. Create a new, empty repository on github.com, for example `hoerskool-dinamika`. Don't add a README, licence or `.gitignore` there.
2. Put the files in it, using any one of these:
   - **GitHub Desktop:** File → Add local repository → choose this folder, create the repository when asked, then "Publish repository".
   - **git:** in this folder, run the commands below.
   - **Web upload:** Add file → Upload files, then drag in the folder contents, including the `.github` folder. The page takes at most 100 files per upload, so upload `src/assets/img` separately.

   ```bash
   git init -b main
   git add .
   git commit -m "Hoërskool Dinamika website"
   git remote add origin https://github.com/YOUR-ACCOUNT/hoerskool-dinamika.git
   git push -u origin main
   ```

3. In the repository open **Settings → Pages**, and under **Build and deployment → Source** choose **GitHub Actions**.
4. Open the **Actions** tab. The "Deploy website to GitHub Pages" run takes about a minute; the site is then live at `https://YOUR-ACCOUNT.github.io/hoerskool-dinamika/`.
   If the first run failed because Pages wasn't switched on yet, click **Re-run all jobs**.

Every later push rebuilds and republishes the site. To use the school's own domain, enter it under **Settings → Pages → Custom domain**.

## How it is organised

| Path | What it holds |
| --- | --- |
| `src/site.js` | School details (phone, e-mail, address, hours), term dates, the page list and menu, shared UI words |
| `src/pages/*.js` | The content of every page, in both languages |
| `src/data/sports.js` | The 12 sports: season, who plays, kit, photos |
| `src/pages/staff.js` | The staff list |
| `src/layout.js` | Header, menu, footer shared by all pages |
| `src/components.js` | Reusable blocks (cards, tables, gallery, term dates…) |
| `src/assets/css`, `src/assets/js` | Styling and small scripts |
| `src/assets/img` | Photos, crest, staff portraits, icons |
| `medias/` | Original photos (yours + downloaded from the old site) |

Afrikaans pages live at the root (`geskiedenis.html`), English under `en/` (`en/history.html`).
The AF | EN switch in the top bar jumps to the same page in the other language.

### Editing text

Every sentence is written as `L('Afrikaans', 'English')`, so both languages sit side by side. Change the text, run `npm run build`, upload `dist/`.

### Adding a page

1. Add a line to `PAGES` in `src/site.js` (id, parent, Afrikaans slug, English slug, titles).
2. Add a renderer with the same id in one of the `src/pages/*.js` files.
3. Build. The build fails if a page has no renderer, and it checks that every internal link and image exists.

### Contact form

The form checks the fields, then opens the visitor's e-mail app with the message filled in (fees questions go to accounts@, principal messages to skoolhoof@). To receive submissions directly instead, point the form at a service such as Formspree or Netlify Forms.

## Please confirm before going live

These come from the old website and may be out of date:

- **School fees** are the 2023 amounts (the page says so). Add the current year's amounts in `src/pages/future.js`.
- **Numbers**: 1 158 learners, 81 staff, class sizes 15–30 (home page and Our School).
- **Principal's message**: the sentence about the school's "30th year" was left out because it is dated.
- **School anthem**: the lyrics were not copied. Paste them into `src/pages/our-school.js` (search for `anthem`).
- **Values**: the old site showed an "Accountability" image as a fifth value; it is listed as *Aanspreeklikheid*.
- **Sport seasons** use the usual South African school seasons.
- Staff bios mention "18 years" (Mrs Vosloo) and "seven years" (Mrs Feenstra); academics mentions four computer centres "soon".
- **Term dates** (2026, DBE gazette) are in `src/site.js` → `TERMS`; update them each year.
- **Domain**: `SITE_URL` in `src/site.js` is used for search-engine links; set it to the final address.

## Credits

Icons: Lucide (ISC licence). Fonts: Questrial and Open Sans (Google Fonts, OFL). Photos: Hoërskool Dinamika.
