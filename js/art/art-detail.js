// ART DETAIL

document.addEventListener('DOMContentLoaded', () => {
    const pageId = document.body.id;
    if (!pageId || !pageId.startsWith('page-art-')) return;
    const currentSlug = pageId.replace('page-art-', '');

    const series = artSeries.find(s => s.slug === currentSlug);
    if (!series) {
        console.error(`Art series with slug '${currentSlug}' not found.`);
        return;
    }

    const header = document.querySelector('.artwork-header');
    if (header) {
        header.innerHTML = `
            <h1>${series.title}</h1>
            <p>${series.description}</p>
        `;
    }

    const display = document.querySelector('.artwork-display');
    if (display && series.pieces) {
        let allPiecesHTML = '';
        series.pieces.forEach(piece => {
            const pieceHTML = `
                <div class="artwork-piece">
                    <img 
                        srcset="
                            ${piece.image.small} 400w,
                            ${piece.image.medium} 800w,
                            ${piece.image.large} 1200w"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        src="${piece.image.medium}" 
                        alt="${piece.altText}"
                        loading="lazy">

                    <div class="artwork-meta">
                        <p><strong>Title:</strong> ${piece.title}</p>
                        <p><strong>Year:</strong> ${piece.year}</p>
                        <p><strong>Dimensions:</strong> ${piece.dimensions}</p>
                        <p><strong>Editions:</strong> ${piece.editions}</p>
                    </div> 
                </div>
            `;
            allPiecesHTML += pieceHTML;
        });
        display.innerHTML = allPiecesHTML;
    }
});