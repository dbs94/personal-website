/**
 * =================================================================
 * ART GALLERY PAGE BUILDER
 * =================================================================
 * This script dynamically builds the art gallery grid page.
 * It takes the data from `art-series-data.js` and generates
 * the HTML for each series cover, including responsive images.
 * =================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    const artGrid = document.getElementById('artGrid');
    if (!artGrid) return;

    // Optional: Sort series by year, newest first.
    const sortedSeries = artSeries.sort((a, b) => b.year - a.year);

    sortedSeries.forEach(series => {
        const gridItemHTML = `
            <div class="grid-item">
                <a href="/pages/art/${series.slug}.html">
                    <img 
                        srcset="
                            ${series.coverImage.small} 400w,
                            ${series.coverImage.medium} 800w,
                            ${series.coverImage.large} 1200w"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src="${series.coverImage.medium}" 
                        alt="${series.altText}"
                        loading="lazy">
                </a>
            </div>
        `;
        artGrid.innerHTML += gridItemHTML;
    });
});