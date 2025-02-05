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

let Sections = document.querySelectorAll('.BG')
Sections.forEach(d=>{
    let ImgSRC =d.getAttribute('data-bg')
    d.style.backgroundImage =`url('${ImgSRC}')`
})
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

// PRODUCT CATEGORY2 SLIDER

let swiperCat2= new Swiper(".swiper-productCat2", {
    speed: 1000,
    slidesPerView:2.1,
    loop:true,
    spaceBetween: 20,
    // centeredSlides:true,
    navigation: {
        nextEl: ".ProductCat-2 .swiper-button-next",
        prevEl: ".ProductCat-2 .swiper-button-prev",
      },
  });  

// TAG PRODUCT
let Tags = document.querySelectorAll('.Tag')
Tags.forEach(tag=>{

    tag.addEventListener('click',(e)=>{
        console.log(e.currentTarget.children[1]);
        let PopUp = e.currentTarget.children[1]
        PopUp.classList.toggle('expand')
   } )
})