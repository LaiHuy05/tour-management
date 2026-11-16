// Slider Tour Detail
var imagesThumb = new Swiper('.imagesThumb', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var imagesMain = new Swiper('.imagesMain', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: imagesThumb,
  },
});
// End Slider Tour Detail
