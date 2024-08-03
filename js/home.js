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
let videoC = document.querySelector('.Video-Clr')
let video2 = document.querySelector('video#main-2')
let PlayBtn = document.querySelector('.PlayBTN')
let PlayBtn2= document.querySelector('.PlayBTN2')
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
PlayBtn2.addEventListener('click',(e)=>{
    e.stopPropagation()
    video2.play()
    video2.parentElement.classList.add('show')
    videoC.addEventListener('click',()=>{
        video2.parentElement.classList.remove('show')
        video2.pause()
    })
})
