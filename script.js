let draggedElement = null;

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedElement = item; // Store the dragged element
        setTimeout(() => {
            item.style.display = 'none'; // Hide the element while dragging
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement.style.display = 'block'; // Show the element again
            draggedElement = null; // Clear the reference
        }, 0);
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default to allow drop
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default action
        if (draggedElement) {
            const targetElement = e.target;
            const parent = targetElement.parentNode;

            // Insert dragged element before the target element
            parent.insertBefore(draggedElement, targetElement);
        }
    });
});
});