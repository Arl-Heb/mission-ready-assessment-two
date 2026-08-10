// Highlight whichever nav link matches the current page, so visitors can
// see where they are in the site at a glance. Shared across every page
// rather than duplicated in map.js/blog.js since the logic is identical.
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// Hamburger menu, only visible on small screens (see styles.css) -
// toggles the nav links open/closed and closes again once a link is picked.
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});
