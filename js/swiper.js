export const swiper = () => {
   let swiper = new Swiper(".slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed:2000,

    autoplay: {
      delay: 2000, 
    }, 
    disableOnInteraction: false,
      disableOnInteraction:false,
      waitForTransition:false,
      paused: false,
      running: false,
      stopOnLastSlide:false, 
  }); 
}
