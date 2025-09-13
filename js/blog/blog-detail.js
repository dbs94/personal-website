// js/blog/blog-detail.js

import { client } from '../sanityClient.js';
import { toHTML } from 'https://esm.sh/@portabletext/to-html';

// 1. Get the slug from the URL
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

// 2. Define the query to get the specific blog post
const query = `*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  publishedAt,
  body
}`;

// 3. Fetch the data and build the page
if (slug) {
  client.fetch(query, { slug }).then(post => {
    const headerElement = document.querySelector('.blog-post-header');
    const contentElement = document.querySelector('.blog-post-content');

    if (post && headerElement && contentElement) {
      // --- A. Populate the Header ---
      document.title = `${post.title} / Dylan Burnside-Smith`;
      const postDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      const headerContent = `
        <h1>${post.title}</h1>
        <p class="post-meta">Published on ${postDate}</p>
      `;
      headerElement.innerHTML = headerContent;

      // --- B. Populate the Body Content ---
      // Convert Sanity's Portable Text to HTML
      const contentHTML = toHTML(post.body);
      contentElement.innerHTML = contentHTML;
    }
  });
}