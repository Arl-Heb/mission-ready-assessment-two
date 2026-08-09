// Long posts start truncated (see the .collapsible CSS). Rather than
// hardcoding a "Read more" button in the HTML for each post - which is
// how the buttons ended up misplaced inside the flex row before - build
// one in JS for each post whose text actually overflows its collapsed
// height, and insert it directly after the image/text row so it always
// lands in the right spot.
document.querySelectorAll('.blog-post-text.collapsible').forEach(text => {
    // scrollHeight is the full content height; clientHeight is the
    // collapsed box height from CSS. If they match, nothing is being
    // hidden, so this post doesn't need a "Read more" button at all.
    if (text.scrollHeight <= text.clientHeight) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'read-more-btn';
    button.textContent = 'Read more';

    button.addEventListener('click', () => {
        const isExpanded = text.classList.toggle('expanded');
        button.textContent = isExpanded ? 'Show less' : 'Read more';
    });

    text.closest('.blog-post-body').insertAdjacentElement('afterend', button);
});

// Estimate reading time for each post from its word count, and show it
// next to the post's date badge (e.g. "Op Shop of the Month · 2 min read").
function addReadingTimes() {
    const WORDS_PER_MINUTE = 200;

    document.querySelectorAll('.blog-post').forEach(post => {
        const text = Array.from(post.querySelectorAll('p'))
            .map(p => p.textContent)
            .join(' ');

        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));

        const dateBadge = post.querySelector('.post-date');
        if (dateBadge) {
            dateBadge.textContent += ` · ${minutes} min read`;
        }
    });
}

addReadingTimes();

// Latest headlines: a Google News RSS search for secondhand/op-shop related
// stories, converted to JSON via rss2json's free public endpoint since
// browsers can't parse RSS/XML from another site directly (no API key
// needed at this scale, though rss2json does offer a free key for
// higher limits if this ever gets rate-limited).
const NEWS_RSS_FEED = 'https://news.google.com/rss/search?q=op+shop+OR+secondhand+OR+thrift+New+Zealand&hl=en-NZ&gl=NZ&ceid=NZ:en';
const NEWS_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(NEWS_RSS_FEED)}`;
const newsList = document.getElementById('newsList');

fetch(NEWS_API_URL)
    .then(response => response.json())
    .then(data => {
        if (data.status !== 'ok' || !data.items.length) {
            newsList.innerHTML = '<li>No headlines available right now.</li>';
            return;
        }

        // Only show the 5 most recent headlines, as a link out to the
        // original source rather than the full article — same approach
        // as the RNZ posts further down this page.
        const headlines = data.items.slice(0, 5);

        newsList.innerHTML = headlines.map(item => {
            const published = new Date(item.pubDate).toLocaleDateString('en-NZ', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            return `<li>
                <a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>
                <span class="news-date">${published}</span>
            </li>`;
        }).join('');
    })
    .catch(() => {
        newsList.innerHTML = "<li>Couldn't load headlines right now — try again later.</li>";
    });
