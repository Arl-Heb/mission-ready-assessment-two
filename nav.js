// Highlight whichever nav link matches the current page, so visitors can
// see where they are in the site at a glance. Shared across every page
// rather than duplicated in map.js/blog.js since the logic is identical.
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav div a').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
