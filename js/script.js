document.addEventListener('DOMContentLoaded', () => {
    const artGrid = document.getElementById('artGrid');
    if (!artGrid) return; // Exit if artGrid is not found

    const gridItems = artGrid.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            artGrid.classList.add('hover-active'); // Activate the hover state for the whole grid
            item.classList.add('hovered');         // Mark this specific item as hovered
        });

        item.addEventListener('mouseleave', () => {
            artGrid.classList.remove('hover-active'); // Deactivate grid hover state
            item.classList.remove('hovered');          // Remove hovered mark from this item
        });
    });
});