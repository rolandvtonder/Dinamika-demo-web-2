// Hoërskool Dinamika — progressive enhancements. The site works without JavaScript;
// this adds dropdown toggles, the mobile drawer, the hero slider, the photo viewer and forms.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fold = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  /* Desktop dropdowns: hover opens them (CSS); the chevron buttons handle keyboard and touch. */
  const nav = $('.mainnav');
  if (nav) {
    const closeAll = (except) => $$('.has-sub.is-open', nav).forEach((li) => {
      if (li === except) return;
      li.classList.remove('is-open');
      $('.mainnav__toggle', li).setAttribute('aria-expanded', 'false');
    });
    $$('.mainnav__toggle', nav).forEach((btn) => btn.addEventListener('click', () => {
      const li = btn.closest('.has-sub');
      const open = !li.classList.contains('is-open');
      closeAll(li);
      li.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    }));
    nav.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const li = e.target.closest('.has-sub.is-open');
      if (li) { closeAll(); $('.mainnav__toggle', li).focus(); }
    });
    nav.addEventListener('focusin', (e) => closeAll(e.target.closest('.has-sub')));
    nav.addEventListener('focusout', (e) => { if (!nav.contains(e.relatedTarget)) closeAll(); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) closeAll(); });
  }

  /* Sticky nav state + back-to-top button */
  const toTop = $('.to-top');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    if (nav) nav.classList.toggle('is-stuck', nav.getBoundingClientRect().top <= 0 && window.scrollY > 120);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 900);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Mobile drawer (native <dialog>: focus trap, Esc and inert background for free) */
  const drawer = $('#drawer');
  const menuBtn = $('.menu-btn');
  if (drawer && menuBtn && typeof drawer.showModal === 'function') {
    menuBtn.addEventListener('click', () => {
      drawer.showModal();
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    });
    drawer.addEventListener('close', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
    drawer.addEventListener('click', (e) => { if (e.target === drawer || e.target.closest('[data-close]')) drawer.close(); });
    matchMedia('(min-width: 1180px)').addEventListener('change', (e) => { if (e.matches && drawer.open) drawer.close(); });
  }

  /* Hero slider: auto-advances, pauses on hover/focus/hidden tab, never auto-plays with reduced motion */
  const hero = $('[data-slider]');
  if (hero) {
    const slides = $$('.hero__slide', hero);
    const dots = $$('.hero__dot', hero);
    const playBtn = $('[data-play]', hero);
    const caption = $('[data-caption-out]', hero);
    let index = 0;
    let timer = null;
    let playing = !reduceMotion;
    let hovering = false;

    const show = (n) => {
      index = (n + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle('is-active', k === index);
        s.setAttribute('aria-hidden', String(k !== index));
      });
      dots.forEach((d, k) => d.setAttribute('aria-current', String(k === index)));
      if (caption) caption.textContent = slides[index].dataset.caption || '';
      // Start loading the next photo now so it is ready when the slide changes.
      const upcoming = slides[(index + 1) % slides.length].querySelector('img');
      if (upcoming && upcoming.loading === 'lazy') upcoming.loading = 'eager';
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (playing && !hovering && slides.length > 1) timer = setInterval(() => show(index + 1), 6500);
    };
    const setPlaying = (p) => {
      playing = p;
      playBtn.classList.toggle('is-paused', !p);
      playBtn.setAttribute('aria-label', p ? playBtn.dataset.pauseLabel : playBtn.dataset.playLabel);
      start();
    };

    $('[data-prev]', hero)?.addEventListener('click', () => { show(index - 1); start(); });
    $('[data-next]', hero)?.addEventListener('click', () => { show(index + 1); start(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
    playBtn?.addEventListener('click', () => setPlaying(!playing));
    hero.addEventListener('mouseenter', () => { hovering = true; stop(); });
    hero.addEventListener('mouseleave', () => { hovering = false; start(); });
    hero.addEventListener('focusin', () => { hovering = true; stop(); });
    hero.addEventListener('focusout', (e) => { if (!hero.contains(e.relatedTarget)) { hovering = false; start(); } });
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    if (playBtn) setPlaying(playing);
    show(0);
  }

  /* Photo viewer for every [data-gallery] */
  const lightbox = $('#lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const img = $('.lightbox__img', lightbox);
    const cap = $('.lightbox__caption', lightbox);
    const prev = $('.lightbox__prev', lightbox);
    const next = $('.lightbox__next', lightbox);
    let list = [];
    let i = 0;
    let opener = null;
    const render = () => {
      const b = list[i];
      img.src = b.dataset.full;
      img.alt = b.dataset.caption || '';
      cap.textContent = list.length > 1 ? `${b.dataset.caption} (${i + 1}/${list.length})` : b.dataset.caption;
    };
    const step = (d) => { i = (i + d + list.length) % list.length; render(); };
    document.addEventListener('click', (e) => {
      const b = e.target.closest('.gallery__btn');
      if (!b) return;
      list = $$('.gallery__item:not([hidden]) .gallery__btn', b.closest('[data-gallery]'));
      i = list.indexOf(b);
      opener = b;
      prev.hidden = next.hidden = list.length < 2;
      render();
      lightbox.showModal();
    });
    prev.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox__figure') || e.target.closest('[data-close]')) lightbox.close();
    });
    lightbox.addEventListener('close', () => opener?.focus());
  }

  /* Gallery album filters */
  $$('[data-gallery]').forEach((g) => {
    const buttons = $$('.filter', g);
    buttons.forEach((b) => b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const f = b.dataset.filter;
      $$('.gallery__item', g).forEach((it) => { it.hidden = f !== 'all' && it.dataset.album !== f; });
    }));
  });

  /* Term dates: badge the current (or next) term */
  const d = new Date();
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  $$('[data-terms]').forEach((box) => {
    const terms = $$('.term', box);
    const mark = (t, label, cls) => {
      t.classList.add(cls);
      const badge = $('.term__badge', t);
      badge.textContent = label;
      badge.hidden = false;
    };
    let found = false;
    terms.forEach((t) => {
      if (today >= t.dataset.start && today <= t.dataset.end) { mark(t, box.dataset.now, 'is-now'); found = true; }
      else if (today > t.dataset.end) t.classList.add('is-past');
    });
    const upcoming = terms.find((t) => t.dataset.start > today);
    if (!found && upcoming) mark(upcoming, box.dataset.next, 'is-next');
  });

  /* Staff search */
  const search = $('[data-staff-search]');
  if (search) {
    const people = $$('.person');
    const groups = $$('.staff-group');
    const count = $('[data-staff-count]');
    const empty = $('[data-staff-empty]');
    const run = () => {
      const q = fold(search.value.trim());
      let n = 0;
      people.forEach((p) => {
        const hit = !q || p.dataset.search.includes(q);
        p.hidden = !hit;
        if (hit) n++;
      });
      groups.forEach((g) => { g.hidden = !$('.person:not([hidden])', g); });
      if (count) count.textContent = count.dataset.template.replace('{n}', n);
      if (empty) empty.hidden = n > 0;
    };
    search.addEventListener('input', run);
  }

  /* Contact form: validates, then opens the visitor's e-mail app with the message filled in */
  const form = $('[data-contact-form]');
  if (form) {
    const fields = $$('[required]', form);
    const check = (f) => {
      const ok = f.checkValidity();
      f.setAttribute('aria-invalid', String(!ok));
      $(`#${f.id}-error`, form).textContent = ok ? '' : (f.validity.valueMissing ? form.dataset.msgRequired : form.dataset.msgInvalid);
      return ok;
    };
    fields.forEach((f) => f.addEventListener('blur', () => { if (f.value || f.getAttribute('aria-invalid') === 'true') check(f); }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const bad = fields.filter((f) => !check(f));
      if (bad.length) { bad[0].focus(); return; }
      const data = new FormData(form);
      const topic = form.elements.topic;
      const to = topic.selectedOptions[0]?.dataset.email || form.dataset.to;
      const subject = `${data.get('topic')} — ${data.get('name')}`;
      const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}${data.get('phone') ? `\n${data.get('phone')}` : ''}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      $('.form__status', form).textContent = form.dataset.msgSent.replace('{to}', to);
    });
  }

  /* Google Map only loads when asked (faster pages, no third-party cookies up front) */
  $$('[data-map]').forEach((box) => {
    $('button', box)?.addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = box.dataset.map;
      f.title = box.dataset.title;
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      box.replaceChildren(f);
    });
  });

  /* Gentle reveal for content below the fold — only when motion is welcome and the tab is visible */
  if (!reduceMotion && 'IntersectionObserver' in window && document.visibilityState === 'visible') {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      io.unobserve(en.target);
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      const kids = el.hasAttribute('data-reveal-stagger') ? [...el.children] : [el];
      kids.forEach((k, n) => {
        k.classList.add('reveal');
        k.style.transitionDelay = `${Math.min(n, 6) * 60}ms`;
        io.observe(k);
      });
    });
    window.addEventListener('beforeprint', () => $$('.reveal').forEach((el) => el.classList.add('is-in')));
  }
})();
