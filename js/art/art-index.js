/**
 * =================================================================
 * ART GALLERY PAGE BUILDER
 * =================================================================
 * This script dynamically builds the art gallery grid page.
 * It takes the data from `art-series-data.js` and generates
 * the HTML for each series cover.
 * =================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    const artGrid = document.getElementById('artGrid');
    if (!artGrid) return;

    // Optional: Sort series by year, newest first.
    // You can remove this line if you prefer the order from the data file.
    const sortedSeries = artSeries.sort((a, b) => b.year - a.year);

    sortedSeries.forEach(series => {
        const gridItemHTML = `
            <div class="grid-item">
                <a href="/pages/art/${series.slug}.html">
                    <img src="${series.coverImage}" alt="${series.altText}">
                </a>
            </div>
        `;
        artGrid.innerHTML += gridItemHTML;
    });
});