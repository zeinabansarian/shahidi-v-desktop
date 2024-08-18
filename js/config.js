let header = document.querySelector('header')
let Op = document.querySelector('.DesktopHeader .Toggles')
let OpMenu = document.querySelector('.Menu-Container')
let Close = document.querySelector('.Menu-Container .CloseIcon')
let leftIMG = document.querySelector(' .Menu-Container .Left .IMG-C img')
let RightIMG = document.querySelector(' .Menu-Container .Right .IMG-C img')
Op.addEventListener('click',()=>{
    OpMenu.classList.add('Open')
    gsap.to('.Menu-Container .Menu-Item .Menu-Link',{
        y:0,
        opacity:1,
        stagger:.1,
      
    })
    gsap.to(leftIMG,{
        y:0,
        opacity:1,
        
    })
    gsap.to(RightIMG,{
        y:0,
        opacity:1,
    })
})
// Images on hover
let MenuItems = document.querySelectorAll('.DesktopHeader .Menu-Container .Menu-Item')
let Banner1 = document.querySelector('.Menu-Container .Left .IMG-C img')
let Banner2 = document.querySelector('.Menu-Container .Right .IMG-C img')

MenuItems.forEach(item=>{
    item.addEventListener('mouseenter',(event)=>{
        for(let i =0 ; i< MenuItems.length ; i++){
            let img1 = item.getAttribute('data-img-1')
            let img2 = item.getAttribute('data-img-2')
            Banner1.classList.add('hide')
            Banner2.classList.add('hide')

            setTimeout(()=>{
                Banner1.setAttribute('src',img1)
                Banner2.setAttribute('src',img2)
                MenuItems[i].classList.remove('show')    
                Banner1.classList.remove('hide')
                Banner2.classList.remove('hide')
                        
            },500)
          
        }
        event.currentTarget.classList.toggle('show')
        })
        item.addEventListener('mouseleave',(event)=>{
            for(let i =0 ; i< MenuItems.length ; i++){
                MenuItems[i].classList.remove('show')
                let img1 = item.getAttribute('data-img-1')
                let img2 = item.getAttribute('data-img-2')
                Banner1.classList.remove('showIMG')   
                Banner2.classList.remove('showIMG')  
            }
            event.currentTarget.classList.toggle('show')
     })

})



Close.addEventListener('click',()=>{
    gsap.to('.Menu-Container .Menu-Item .Menu-Link',{
        y:100,
        opacity:0,
        stagger:.1
    })
    gsap.to(leftIMG,{
        y:200,
        opacity:0,
    })
    gsap.to(RightIMG,{
        y:-200,
        opacity:0,
    })
    setTimeout(() => {
        OpMenu.classList.remove('Open')  
    }, 1500);

})
const lenis = new Lenis()
  
  
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("activeHeader");
        } else {
           $("header").removeClass("activeHeader");
        }
    });
  });
  let headerr = document.querySelector('header')
  
  var lastScrollTop = 0;
  window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    console.log("over");
    headerr.classList.remove('color')
    $("header").addClass("goDown");
    headerr.classList.add('color')
    $("header").removeClass("goTop");
    
  } if (st ==0) {
    headerr.classList.remove('color')
        console.log("less");
   } 
   else if (st < lastScrollTop) {
    // upscroll code
  
  
    $("header").addClass("goTop");
    $("header").removeClass("goDown");
        console.log("less");
   } 
   lastScrollTop = st <= 0 ? 0 : st;
  }, false);
  
  // DESKTOP
  function switchScroll() {
    if (flag != true){
      enable_scroll();
    } else {
      disable_scroll();
    }
  }
    function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  function keydown(e) {
    var keys = [32,33,34,35,36,37,38,39,40];
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }
  function wheel(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  function disable_scroll() {
    if (document.addEventListener) {
      document.addEventListener('wheel', wheel, false);
      document.addEventListener('mousewheel', wheel, false);
      document.addEventListener('DOMMouseScroll', wheel, false);
    }
    else {
      document.attachEvent('onmousewheel', wheel);
    }
    document.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    
    x = window.pageXOffset || document.documentElement.scrollLeft,
    y = window.pageYOffset || document.documentElement.scrollTop,
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
    // document.body.style.overflow = 'hidden'; // CSS
    disable_scroll_mobile();
  }
  function enable_scroll() {
    if (document.removeEventListener) {
      document.removeEventListener('wheel', wheel, false);
      document.removeEventListener('mousewheel', wheel, false);
      document.removeEventListener('DOMMouseScroll', wheel, false);
    }
    document.onmousewheel = document.onmousewheel = document.onkeydown = null;
    window.onscroll = function() {};
    // document.body.style.overflow = 'auto'; // CSS
    enable_scroll_mobile();
  }
  
  // MOBILE
  function disable_scroll_mobile(){
    document.addEventListener('touchmove', preventDefault, false);
  }
  function enable_scroll_mobile(){
    document.removeEventListener('touchmove', preventDefault, false);
  }          