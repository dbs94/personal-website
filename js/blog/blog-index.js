// js/blog/blog-index.js

import { client } from '../sanityClient.js';
import imageUrlBuilder from 'https://esm.sh/@sanity/image-url';

// Set up the helper to generate image URLs
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Define the query to fetch blog posts
const query = `*[_type == "blogPost"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  heroImage {
    asset,
    alt
  },
  excerpt
}`;

// Get the container element
const container = document.getElementById('blog-posts-container');
if (container) {
  // Fetch the data from Sanity
  client.fetch(query).then(posts => {

    if (posts && posts.length > 0) {
      const postsHTML = posts.map(post => {
        // Format the date nicely
        const postDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',

          month: 'long',
          year: 'numeric'
        });

        // Build the HTML for a single post card
        return `
          <a href="/pages/blog/post.html?slug=${post.slug}" class="blog-grid-item">
            <div class="blog-item-image-container">
              <img
                src="${urlFor(post.heroImage).width(800).url()}"
                alt="${post.heroImage.alt}"
                loading="lazy">
            </div>
            <div class="blog-item-caption">
              <h2>${post.title}</h2>
              <p class="post-date">${postDate}</p>
            </div>
          </a>
        `;
      }).join('');

      // Add the generated HTML to the container
      container.innerHTML = postsHTML;
    }
  });
}