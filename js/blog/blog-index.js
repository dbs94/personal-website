/**
 * =================================================================
 * BLOG INDEX PAGE BUILDER
 * =================================================================
 * This script dynamically builds the blog index page.
 *
 * It takes the data from `blog-posts-data.js`, sorts the posts by
 * date, and generates the HTML for each post card.
 *
 * I shouldn't need to edit this file unless I want to change
 * the layout of the blog index page itself.
 * =================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    // Sort posts by date, newest first
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Loop through the data and generate an HTML card for each post
    sortedPosts.forEach(post => {
        // --- THIS IS THE UPDATED HTML STRUCTURE ---
        const postCardHTML = `
            <a href="/pages/blog/blog-posts/${post.slug}.html" class="blog-grid-item">
                <div class="blog-item-image-container">
                    <img src="${post.heroImage}" alt="Hero image for ${post.title}">
                </div>
                <div class="blog-item-caption">
                    <h2>${post.title}</h2>
                    <p class="post-date">${new Date(post.date).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
                </div>
            </a>
        `;
        // Add the new HTML to the page
        container.innerHTML += postCardHTML;
    });
});