// ART DETAIL

// Function to render the header safely
function renderSeriesHeader(series, headerElement) {
    // Clear previous content
    headerElement.innerHTML = ''; 

    const title = document.createElement('h1');
    title.textContent = series.title;

    const description = document.createElement('p');
    description.textContent = series.description;

    headerElement.append(title, description);
}

// Function to create a single artwork piece element
function createPieceElement(piece) {
    const pieceDiv = document.createElement('div');
    pieceDiv.className = 'artwork-piece';

    const image = document.createElement('img');
    image.srcset = `
        ${piece.image.small} 400w,
        ${piece.image.medium} 800w,
        ${piece.image.large} 1200w
    `;
    image.sizes = '(max-width: 768px) 100vw, 80vw';
    image.src = piece.image.medium;
    image.alt = piece.altText;
    image.loading = 'lazy';
    
    const metaDiv = document.createElement('div');
    metaDiv.className = 'artwork-meta';
    
    // Using a helper to create meta paragraphs to reduce repetition
    const createMetaP = (label, value) => {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        p.append(strong, document.createTextNode(value));
        return p;
    };

    metaDiv.append(
        createMetaP('Title', piece.title),
        createMetaP('Year', piece.year),
        createMetaP('Dimensions', piece.dimensions),
        createMetaP('Editions', piece.editions)
    );

    pieceDiv.append(image, metaDiv);
    return pieceDiv;
}

// Main logic
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
        renderSeriesHeader(series, header);
    }

    const display = document.querySelector('.artwork-display');
    if (display && series.pieces) {
        // Use a DocumentFragment for performance
        const fragment = document.createDocumentFragment();
        series.pieces.forEach(piece => {
            const pieceElement = createPieceElement(piece);
            fragment.appendChild(pieceElement);
        });

        // Clear previous content and append the fragment in one operation
        display.innerHTML = '';
        display.appendChild(fragment);
    }
});