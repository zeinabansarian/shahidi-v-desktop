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
                        
            },1000)
          
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