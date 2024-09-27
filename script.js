let draggedElement = null;

document.querySelectorAll('.item').forEach(item => {
    item.setAttribute('draggable', 'true');

    item.addEventListener('dragstart', (e) => {
        draggedElement = item;
        setTimeout(() => {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement.style.display = 'block';
            draggedElement = null;
        }, 0);
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedElement) {
            const targetElement = e.target.closest('.item');
            if (targetElement && targetElement !== draggedElement) {
                const parent = targetElement.parentNode;
                parent.insertBefore(draggedElement, targetElement);
            }
        }
    });
});
