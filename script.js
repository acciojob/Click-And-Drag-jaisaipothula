// script.js

let isDragging = false;

const cubes = document.querySelectorAll('.cube');

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (event) => {
        isDragging = true;
        cube.classList.add('active'); // Highlight the clicked cube
        event.preventDefault(); // Prevent text selection
    });

    cube.addEventListener('mouseover', (event) => {
        if (isDragging) {
            cube.classList.add('active'); // Highlight the hovered cube
        }
    });

    cube.addEventListener('mouseup', () => {
        isDragging = false; // Stop dragging on mouseup
    });
});

// Stop dragging when the mouse leaves the container
document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Optional: Remove highlight when dragging stops
document.addEventListener('mousemove', () => {
    if (!isDragging) {
        cubes.forEach(cube => {
            cube.classList.remove('active'); // Remove active class from all cubes
        });
    }
});
