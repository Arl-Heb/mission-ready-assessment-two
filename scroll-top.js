// Floating "back to top" button: fades in once the page has been scrolled
// down a bit, and smooth-scrolls back to the top when clicked. Shared
// across pages (rather than duplicated in map.js/blog.js) since the
// button and its behaviour are identical everywhere it's used.
const scrollTopBtn = document.getElementById('scrollTopBtn');
const SCROLL_SHOW_THRESHOLD = 400;

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > SCROLL_SHOW_THRESHOLD);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
