document.addEventListener('DOMContentLoaded', () => {
    const artGrid = document.getElementById('artGrid');
    if (!artGrid) return;

    artGrid.addEventListener('mouseover', (event) => {
        const hoveredItem = event.target.closest('.grid-item');

        if (hoveredItem) {
            artGrid.classList.add('hover-active');
            hoveredItem.classList.add('hovered');
        }
    });

    artGrid.addEventListener('mouseout', (event) => {
        const hoveredItem = event.target.closest('.grid-item');

        if (hoveredItem) {
            artGrid.classList.remove('hover-active');
            hoveredItem.classList.remove('hovered');
        }
    });
});