const fr = document.documentElement.lang === 'fr';
const message = (en, french) => fr ? french : en;
const toast = document.querySelector('.toast');
let toastTimer;
function notify(text) { if (!toast) return; toast.textContent = text; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 4500); }
const themeButton = document.querySelector('#theme-toggle');
function syncTheme() { const light = document.documentElement.dataset.theme === 'light'; themeButton?.setAttribute('aria-pressed', String(light)); themeButton?.setAttribute('aria-label', light ? message('Switch to dark theme','Passer au thème sombre') : message('Switch to light theme','Passer au thème clair')); }
syncTheme();
themeButton?.addEventListener('click', () => { const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'; document.documentElement.dataset.theme = next; try { localStorage.setItem('theme', next); } catch {} syncTheme(); });
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', message('Open navigation','Ouvrir la navigation')); }
menuButton?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? message('Close navigation','Fermer la navigation') : message('Open navigation','Ouvrir la navigation')); });
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
function filterProjects(value) { if (!filters.some(f => f.dataset.filter === value)) value = 'all'; filters.forEach(button => { const active = button.dataset.filter === value; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); }); let count = 0; cards.forEach(card => { const show = value === 'all' || card.dataset.category === value; card.hidden = !show; if (show) count++; }); const counter = document.querySelector('.project-count'); if (counter) counter.textContent = counter.dataset.template.replace('{n}', count); }
if (filters.length) { const initial = new URL(location.href).searchParams.get('filter'); filterProjects(initial || 'all'); filters.forEach(button => button.addEventListener('click', () => { const value = button.dataset.filter; filterProjects(value); const url = new URL(location.href); if (value === 'all') url.searchParams.delete('filter'); else url.searchParams.set('filter', value); try { history.replaceState({}, '', url); } catch {} })); }
const tabs = [...document.querySelectorAll('[role=tab]')];
function selectTab(tab, focus = false) { tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; const panel = document.getElementById(item.getAttribute('aria-controls')); if (panel) panel.hidden = !active; }); if (focus) tab.focus(); }
tabs.forEach((tab,index) => { tab.addEventListener('click', () => selectTab(tab)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = tabs[(index+1)%tabs.length]; if (event.key === 'ArrowLeft') next = tabs[(index-1+tabs.length)%tabs.length]; if (event.key === 'Home') next = tabs[0]; if (event.key === 'End') next = tabs.at(-1); if(next){event.preventDefault();selectTab(next,true);} }); });
const steps = [...document.querySelectorAll('[data-step]')];
steps.forEach(button => button.addEventListener('click', () => { steps.forEach(step => { const active = step === button; step.classList.toggle('active', active); step.setAttribute('aria-pressed', String(active)); document.getElementById(step.getAttribute('aria-controls')).hidden = !active; }); }));
document.querySelector('#copy-email')?.addEventListener('click', async event => { const email = event.currentTarget.dataset.email; try { await navigator.clipboard.writeText(email); notify(message('Email address copied.','Adresse e-mail copiée.')); } catch { notify(message('Copy this address: ','Copiez cette adresse : ')+email); } });
if ('IntersectionObserver' in window && cards.length) { const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { nav?.querySelectorAll('a').forEach(a => { const active = a.hash === '#'+entry.target.id; a.classList.toggle('active',active); if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); }); } }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 }); ['projects','about','experience','contact'].forEach(id => { const section = document.getElementById(id); if(section) observer.observe(section); }); }
