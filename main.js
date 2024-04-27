// main.js
document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');

    function showImage(index) {
        images.forEach(image => {
            image.classList.remove('active');
            image.style.display = 'none'; // hide the image
        });
        images[index].classList.add('active');
        images[index].style.display = 'block'; // show the image
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Initial call to show the first image
    showImage(currentImageIndex);
});
