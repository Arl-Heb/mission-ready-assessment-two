// Floating "back to top" button: fades in once the page has been scrolled
// down a bit, and smooth-scrolls back to the top when clicked. Shared
// across pages (rather than duplicated in map.js/blog.js) since the
// button and its behaviour are identical everywhere it's used.
const scrollTopBtn = document.getElementById('scrollTopBtn');
const siteFooter = document.querySelector('footer');
const SCROLL_SHOW_THRESHOLD = 400;
const BTN_MARGIN = 24;

// Keeps the button floating just above the footer instead of on top of it,
// since the button and footer share the same dark green background and
// the button would otherwise sit over the footer's GitHub link/credit.
function updateScrollTopBtn() {
    scrollTopBtn.classList.toggle('visible', window.scrollY > SCROLL_SHOW_THRESHOLD);

    const footerOverlap = window.innerHeight - siteFooter.getBoundingClientRect().top;
    scrollTopBtn.style.bottom = `${BTN_MARGIN + Math.max(0, footerOverlap)}px`;
}

window.addEventListener('scroll', updateScrollTopBtn);
window.addEventListener('resize', updateScrollTopBtn);
updateScrollTopBtn();

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
