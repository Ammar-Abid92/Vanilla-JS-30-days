

const sliderImages = document.querySelectorAll('img')
window.addEventListener('scroll', checkSlide)

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
    //   console.log(window.innerHeight)
      const imageBottom = sliderImage.offsetTop + sliderImage.height;



      console.log(window.scrollY,slideInAt, sliderImage.offsetTop , window.innerHeight, imageBottom)
    //   console.log(imageBottom)
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      console.log(isHalfShown, isNotScrolledPast)
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }