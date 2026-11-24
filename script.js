(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const toggle = document.querySelector('.theme-toggle');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.side-nav');
  const themeNames = ['system', 'light', 'dark'];
  let theme = (() => { try { return localStorage.getItem('portfolio-theme') || 'system'; } catch { return 'system'; } })();
  const paintTheme = () => {
    if (theme === 'system') delete root.dataset.theme;
    else root.dataset.theme = theme;
    if (toggle) toggle.querySelector('span').textContent = theme[0].toUpperCase() + theme.slice(1);
  };
  paintTheme();
  toggle?.addEventListener('click', () => {
    theme = themeNames[(themeNames.indexOf(theme) + 1) % themeNames.length];
    paintTheme();
    try { if (theme === 'system') localStorage.removeItem('portfolio-theme'); else localStorage.setItem('portfolio-theme', theme); } catch {}
  });
  menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu?.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { menu?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open'); }
  });
  document.querySelector('.copy-email')?.addEventListener('click', async event => {
    const button = event.currentTarget;
    const status = button.querySelector('[role="status"]');
    try { await navigator.clipboard.writeText(button.dataset.copy); status.textContent = 'Copied'; }
    catch { status.textContent = button.dataset.copy; }
    setTimeout(() => { status.textContent = ''; }, 2500);
  });
  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav?.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
