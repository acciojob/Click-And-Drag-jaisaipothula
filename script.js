const itemsContainer = document.getElementById('items');
let isDragging = false;
let startX;
let scrollLeft;

// Mouse down event: starts the dragging process
itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true; // Set dragging state to true
    startX = e.pageX - itemsContainer.offsetLeft; // Get the starting mouse position
    scrollLeft = itemsContainer.scrollLeft; // Store the current scroll position
    itemsContainer.style.cursor = 'grabbing'; // Change cursor to grabbing
});

// Mouse leave event: stops dragging if the mouse leaves the container
itemsContainer.addEventListener('mouseleave', () => {
    isDragging = false; // Set dragging state to false
    itemsContainer.style.cursor = 'grab'; // Reset cursor style
});

// Mouse up event: stops dragging when the mouse button is released
itemsContainer.addEventListener('mouseup', () => {
    isDragging = false; // Set dragging state to false
    itemsContainer.style.cursor = 'grab'; // Reset cursor style
});

// Mouse move event: handles the dragging action
itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Stop if not dragging
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - itemsContainer.offsetLeft; // Get current mouse position
    const walk = (x - startX) * 2; // Calculate how far to scroll
    itemsContainer.scrollLeft = scrollLeft - walk; // Update scroll position
});
