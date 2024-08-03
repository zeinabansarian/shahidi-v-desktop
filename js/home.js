// LOAD BANNE
gsap.to('.Banner-Slider img',{
    x:0,
    opacity:1,
    ease:'none'
})
// BANNER SLIDER
let swiperBanner = new Swiper(".swiper-Banner", {
    slidesPerView:1,
    spaceBetween:0,
    effect:'slide'
  }); 

// PRODUCT CATEGORY SLIDER

let swiperProject= new Swiper(".swiper-Category", {
    loop: true,
    speed: 1000,
    centeredSlides:true,
    slidesPerView:4.7,
    spaceBetween: 40,

  });  