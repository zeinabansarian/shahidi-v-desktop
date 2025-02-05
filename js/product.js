const thumbSlider = new Swiper('.thumbSlider', {
    slidesPerView: 4,
    loop: false,
    spaceBetween:20,
  });
const mainSlider = new Swiper('.mainSlider', {
    slidesPerView: 1,
    loop: false,
    thumbs: {
        swiper: thumbSlider
      },
  });

  document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });





  jQuery(document).ready(function() {
	
	jQuery('.tabSection .aboutPara').readmore({
		speed: 100,
		collapsedHeight:96,
		moreLink: '<button>نمایش بیشتر ></button>',
		lessLink: '<button>نمایش کمتر <</button>',
		heightMargin: 16,
        afterToggle: function(trigger, element, expanded) {
            console.log("element");
            
            if(! expanded) { // The "Close" link was clicked
              $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
            }
          },
	});
	
});