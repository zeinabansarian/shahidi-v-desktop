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
        stagger:.1
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