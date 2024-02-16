const imageElements = document.querySelectorAll('.img-serum, .img-facecream, .img-facemask, .img-papaya, .img-smile, .img-skincare, .img-pimple, .img-aloevera, .img-melanin, .img-supplements');
let currentIndex = 0;

function showNextImage() {
  if (currentIndex < imageElements.length) {
    imageElements.forEach(image => image.style.display = 'none');
    imageElements[currentIndex].style.display = 'block';
    currentIndex = (currentIndex + 1) % imageElements.length;
    setTimeout(showNextImage, 1000); //displays after one second//
  }
}

showNextImage();
