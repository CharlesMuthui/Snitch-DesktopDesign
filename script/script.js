let slideIndex = 0;
 
function showSlides(){
   const slides = document.querySelector('.new-img');
   const images = slides.querySelectorAll('img');

    // Hide all images
    images.forEach(img => {
      img.style.display = 'none';
  });

  //show current image

   if (slideIndex >= images.length){
      slideIndex = 0;
   } 
   images[slideIndex].style.display = 'block';
}
 function nextSlide(){
   slideIndex++;
   showSlides();
 }
 
 function startSlideShow() {
   slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

startSlideShow();