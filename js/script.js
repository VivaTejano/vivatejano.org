const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
function updateHeader(){ if(window.scrollY > 20){ header?.classList.add('is-scrolled'); } else { header?.classList.remove('is-scrolled'); } }
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});
toggle?.addEventListener('click', () => { const open = links.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => { links?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded','false'); }));
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, {threshold:.14});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
