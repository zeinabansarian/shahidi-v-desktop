let Sections = document.querySelectorAll('.BG')
Sections.forEach(d=>{
    let ImgSRC =d.getAttribute('data-bg')
    d.style.backgroundImage =`url('${ImgSRC}')`
})

//  IMG SLIDER

let swiperCat2= new Swiper(".swiper-IMG", {
    speed: 1000,
    slidesPerView:3,
    loop:true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".ImgSlider .swiper-button-next",
        prevEl: ".ImgSlider .swiper-button-prev",
      },
  });  

//   PLAY VIDEO
let videoC = document.querySelector('.Video-Clr')
let video2 = document.querySelector('video#main-2')
let PlayBtn2= document.querySelector('.PlayBTN2')
PlayBtn2.addEventListener('click',(e)=>{
    e.stopPropagation()
    video2.play()
    video2.parentElement.classList.add('show')
    videoC.addEventListener('click',()=>{
        video2.parentElement.classList.remove('show')
        video2.pause()
    })
})
