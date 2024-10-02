const itemsContainer = document.getElementById('items');
let isDragging = false;
let startX;
let scrollLeft;

itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
    itemsContainer.style.cursor = 'grabbing';
});

itemsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    itemsContainer.style.cursor = 'grab';
});

itemsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    itemsContainer.style.cursor = 'grab';
});

itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Stop the function if not dragging
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    itemsContainer.scrollLeft = scrollLeft - walk;
});
