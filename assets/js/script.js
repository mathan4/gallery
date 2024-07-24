document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page is fully loaded');
    initializeGallery();
});

function initializeGallery() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach((img, index) => {
        // Add mouse movement event listener
        img.addEventListener('mousemove', handleMouseMove);

        // Add focus event listener
        img.addEventListener('focus', handleFocus);

        // Add blur event listener
        img.addEventListener('blur', handleBlur);
    });
}

function handleMouseMove(event) {
    console.log(`Mouse moved over image: ${event.target.alt}`);
}

function handleFocus(event) {
    console.log(`Image focused: ${event.target.alt}`);
    event.target.classList.add('focused');
}

function handleBlur(event) {
    console.log(`Image lost focus: ${event.target.alt}`);
    event.target.classList.remove('focused');
}
