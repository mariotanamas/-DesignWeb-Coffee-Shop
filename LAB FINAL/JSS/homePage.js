var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});



//jquery SLIDE//
$(function()
{  
    //value for animation  
    var width = 900;  
    var animationSpeed = 2000;  
    var pause = 5000;  
    var currentSlide = 1;  
    //Dom element.   
    var $slider = $('#JQslider');  
    var $sliderAnimation = $slider.find('.JQslides');  
    var $slides = $sliderAnimation.find('.JQslide');  
  
    setInterval(function()
    {  
        $sliderAnimation.animate({'margin-left': '-='+width}, animationSpeed, function(){  
        currentSlide ++;  
            if(currentSlide === $slides.length)  
            {  
                $sliderAnimation.css('margin-left', 0);  
                currentSlide = 1;  
            } 
            if(currentSlide===3)
            {
                
            }
        });  
    },pause);  
}); 