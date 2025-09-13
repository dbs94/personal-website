// js/art-index.js

import { client } from '../sanityClient.js';
import imageUrlBuilder from 'https://esm.sh/@sanity/image-url';

// 1. Set up the helper to generate image URLs
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// 2. Define the query to fetch the data
// GROQ (Graph-Relational Object Queries) is Sanity's query language.
const query = `*[_type == "artSeries"] | order(year desc) {
  title,
  "slug": slug.current,
  coverImage {
    asset,
    alt
  }
}`;

// 3. Get the container element
const artGrid = document.getElementById('artGrid');
if (artGrid) {
  // 4. Fetch the data from Sanity
  client.fetch(query).then(seriesList => {

    console.log('Data received from Sanity:', seriesList); // <--- ADD THIS LINE

    // 5. If we get data back, build the HTML
    if (seriesList && seriesList.length > 0) {
      const allGridItemsHTML = seriesList.map(series => {
        // Build the HTML for a single grid item
        return `
          <div class="grid-item">
            <a href="/pages/art/series.html?slug=${series.slug}">
              <img
                srcset="
                  ${urlFor(series.coverImage).width(400).url()} 400w,
                  ${urlFor(series.coverImage).width(800).url()} 800w,
                  ${urlFor(series.coverImage).width(1200).url()} 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                src="${urlFor(series.coverImage).width(800).url()}"
                alt="${series.coverImage.alt}"
                loading="lazy">
            </a>
          </div>
        `;
      }).join('');
      
      // 6. Add the generated HTML to the grid
      artGrid.innerHTML = allGridItemsHTML;
    }
  });
}