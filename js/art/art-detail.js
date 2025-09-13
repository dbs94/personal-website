// js/art/art-detail.js

import { client } from '../sanityClient.js';
import imageUrlBuilder from 'https://esm.sh/@sanity/image-url';

// Set up the helper to generate image URLs
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// 1. Get the slug from the URL
// --------------------------------
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');


// 2. Write the query to get the specific art series
// --------------------------------
// We use the '$slug' variable to pass the slug from the URL into the query.
// The [0] at the end tells Sanity to give us just the one matching document, not an array.
const query = `*[_type == "artSeries" && slug.current == $slug][0] {
  title,
  description,
  pieces[] {
    title,
    year,
    dimensions,
    editions,
    image {
      asset,
      alt
    }
  }
}`;


// 3. Fetch the data and build the page
// --------------------------------
if (slug) {
  // Pass the slug variable into the fetch query
  client.fetch(query, { slug }).then(series => {
    
    // Find our empty placeholder elements in the HTML
    const headerElement = document.querySelector('.artwork-header');
    const displayElement = document.querySelector('.artwork-display');

    if (series && headerElement && displayElement) {
      // --- A. Populate the Header ---
      document.title = `${series.title} / Dylan Burnside-Smith`; // Update the page title
      const headerContent = `
        <h1>${series.title}</h1>
        <p>${series.description}</p>
      `;
      headerElement.innerHTML = headerContent;

      // --- B. Populate the Artwork Display ---
      const piecesHTML = series.pieces.map(piece => `
        <div class="artwork-piece">
          <img 
            src="${urlFor(piece.image).width(800).url()}" 
            alt="${piece.image.alt}" 
            loading="lazy">
          <div class="artwork-meta">
            <p><strong>Title:</strong> ${piece.title}</p>
            <p><strong>Year:</strong> ${piece.year}</p>
            <p><strong>Dimensions:</strong> ${piece.dimensions}</p>
            <p><strong>Editions:</strong> ${piece.editions}</p>
          </div>
        </div>
      `).join('');
      displayElement.innerHTML = piecesHTML;
    }

  });
}