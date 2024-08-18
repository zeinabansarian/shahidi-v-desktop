let Sections = document.querySelectorAll('.BG')
Sections.forEach(d=>{
    let ImgSRC =d.getAttribute('data-bg')
    d.style.backgroundImage =`url('${ImgSRC}')`
})
// BANNER SLIDER
// let swiperBanner= new Swiper(".swiper-Banners", {
//     speed: 1000,
//     slidesPerView:1,
//     spaceBetween: 0,
//     effect:'creative',
//     pagination: {
//         el: '.AboutBannerC .swiper-pagination',
//               clickable: true,
//           renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + '<span class="line"></span><span class="num">0'+ (index+1) +'</span>' + '</span>';
//           },
//       },
//   });  
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
let is = false

// jQuery(document).ready(function() {
	
// 	jQuery('.AboutBannerC .Text ').readmore({
// 		speed: 100,
// 		collapsedHeight:96,
// 		moreLink: `
//          <div class="ShowMoreBTN-2">
//                             <a href="">
//                                 <span>
//                                     <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M4 0C4.1692 0 4.3064 0.1372 4.3064 0.3064V3.6932H7.6936C7.77492 3.6932 7.8529 3.7255 7.9104 3.783C7.9679 3.8405 8.0002 3.91848 8.0002 3.9998C8.0002 4.08112 7.9679 4.1591 7.9104 4.2166C7.8529 4.2741 7.77492 4.3064 7.6936 4.3064H4.3064V7.6936C4.3064 7.77486 4.27412 7.8528 4.21666 7.91026C4.1592 7.96772 4.08126 8 4 8C3.91874 8 3.8408 7.96772 3.78334 7.91026C3.72588 7.8528 3.6936 7.77486 3.6936 7.6936L3.6932 4.3064H0.3064C0.225138 4.3064 0.147204 4.27412 0.0897425 4.21666C0.0322813 4.1592 0 4.08126 0 4C0 3.91874 0.0322813 3.8408 0.0897425 3.78334C0.147204 3.72588 0.225138 3.6936 0.3064 3.6936L3.6932 3.6932V0.3064C3.69341 0.225133 3.72582 0.147262 3.78332 0.0898349C3.84082 0.0324081 3.91873 0.000105541 4 0Z" fill="#FFFFFF"/>
//                                         </svg>
                                        
//                                 </span>
//                                 <span>نمایش بیشتر</span>
                              
//                             </a>
//                           </div>
//         `,
// 		lessLink: `
//          <div class="ShowMoreBTN-2">
//                             <a href="">
//                                 <span>
//                                 <svg width="8" height="8" viewBox="0 0 40 1" fill="none" xmlns="http://www.w3.org/2000/svg">
// <line x1="40" y1="0.25" x2="2.18557e-08" y2="0.250003" stroke="#000" fill="#FFFFFF" stroke-width="0.5"/>
// </svg>

                                        
//                                 </span>
//                                 <span>نمایش کمتر</span>
                              
//                             </a>
//                           </div>
//         `,
// 		heightMargin: 16,
//         beforeToggle:function(e){
//      console.log('before',e);
//     let content = document.querySelector('.ContentBox')
//     if(!is){
//     content.style.height='auto'
//      is = true
//      console.log('c',is);
//     }
//     else{
//          content.style.height='74vh'
//          is = false
//       console.log('d',is);

//     }
//         },
//         afterToggle: function(trigger, element, expanded) {
//             console.log("element");
            
//             if(! expanded) { // The "Close" link was clicked
//                 let content = document.querySelector('.ContentBox')
//               $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
//                content.style.height='71vh'
//             }
//           },
// 	});

// });
//  //SHOW MORE
let showBTN = document.querySelector('.AboutBannerC .ShowMoreBTN-2')
let textMore = document.querySelector('.AboutBannerC .ContentBox .Text')
let moreSVG= document.querySelector('.more')
showBTN.addEventListener('click',(e)=>{
  if(!is){
    textMore.classList.toggle('active')
    console.log(e.currentTarget.children[0].children[1]);
    e.currentTarget.children[0].children[1].innerText = 'نمایش کمتر'
    moreSVG.innerHTML = `
   
                                  <svg width="8" height="8" viewBox="0 0 40 1" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="0.25" x2="2.18557e-08" y2="0.250003" stroke="#000" fill="#FFFFFF" stroke-width="0.5"/>
  </svg>
  
                                          
                        
    `
         is = true
         console.log('c',is);
        }
        else{
          textMore.classList.toggle('active')
          console.log(e.currentTarget.children[0].children[1]);
          e.currentTarget.children[0].children[1].innerText = 'نمایش بیشتر'
          moreSVG.innerHTML = `
         
                                      <svg  width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 0C4.1692 0 4.3064 0.1372 4.3064 0.3064V3.6932H7.6936C7.77492 3.6932 7.8529 3.7255 7.9104 3.783C7.9679 3.8405 8.0002 3.91848 8.0002 3.9998C8.0002 4.08112 7.9679 4.1591 7.9104 4.2166C7.8529 4.2741 7.77492 4.3064 7.6936 4.3064H4.3064V7.6936C4.3064 7.77486 4.27412 7.8528 4.21666 7.91026C4.1592 7.96772 4.08126 8 4 8C3.91874 8 3.8408 7.96772 3.78334 7.91026C3.72588 7.8528 3.6936 7.77486 3.6936 7.6936L3.6932 4.3064H0.3064C0.225138 4.3064 0.147204 4.27412 0.0897425 4.21666C0.0322813 4.1592 0 4.08126 0 4C0 3.91874 0.0322813 3.8408 0.0897425 3.78334C0.147204 3.72588 0.225138 3.6936 0.3064 3.6936L3.6932 3.6932V0.3064C3.69341 0.225133 3.72582 0.147262 3.78332 0.0898349C3.84082 0.0324081 3.91873 0.000105541 4 0Z" fill="#FFFFFF"/>
                                            </svg>
                                            
                                                
                              
          `
             is = false
          console.log('d',is);
    
        }

})
let handler = document.querySelector('.handler')
let slides = document.querySelectorAll('.Banners .slide')
let j = 0
for(let i = 0 ;i < slides.length ; i++){
  let span = document.createElement('span')
  let divn = document.createElement('div')
  divn.classList.add('num')
  span.appendChild(divn)
  divn.innerText = i+1
  let divl = document.createElement('div')
  divl.classList.add('line')
  span.appendChild(divl)
  handler.appendChild(span)
  if(i==0){
    span.classList.add('choosen')
  }
}
slides.forEach(n=>{
   
    n.setAttribute('data-index',j)
    j++
    if(j>=slides.length){
        return
    }
    })
$(function() {
    document.querySelector('.slide').classList.add('show')
	$(".handler span").on("click", function() {
		$(this).addClass("choosen").siblings().removeClass("choosen");
		$(".slide")
			.eq($(this).index())
			.addClass("show")
			.siblings()
			.removeClass("show");
	});
})