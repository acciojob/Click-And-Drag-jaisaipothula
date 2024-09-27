let draggedElement = null;

document.querySelectorAll('.cube').forEach(cube => {
    cube.addEventListener('dragstart', (e) => {
        draggedElement = cube; // Store the dragged element
        setTimeout(() => {
            cube.style.display = 'none'; // Hide the element while dragging
        }, 0);
    });

    cube.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement.style.display = 'block'; // Show the element again
            draggedElement = null; // Clear the reference
        }, 0);
    });

    cube.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default to allow drop
    });

    cube.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default action
        if (draggedElement) {
            // Swap positions with the dropped element
            const targetElement = e.target;
            const parent = targetElement.parentNode;

            // Insert dragged element before the target element
            parent.insertBefore(draggedElement, targetElement);
        }
    });
});