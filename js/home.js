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

  let About = document.querySelector('.About-Clr')
let ImgSRC =About.getAttribute('data-bg')
About.style.backgroundImage =`url('${ImgSRC}')`

//   PLAY VIDEO
let video = document.querySelector('video#main')
let PlayBtn = document.querySelector('.PlayBTN')
let popup = document.querySelector('.PopUp')
let CloseBtn = document.querySelector('.PopUp .Close')
PlayBtn.addEventListener('click',()=>{
    popup.classList.add('Open')
    video.classList.add('show')
    video.play()
})
CloseBtn.addEventListener('click',()=>{
    popup.classList.remove('Open')
    video.classList.remove('show')   
    video.pause()
})

