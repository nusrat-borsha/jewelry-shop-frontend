'use strict';

//============SLIDER==============
const slider = function(){

    const slides = document.querySelectorAll(".slide");
    
    const btnLft = document.querySelector(".slider__btn--left");
    
    const btnRgt = document.querySelector(".slider__btn--right");
    
    const dotContainer = document.querySelector(".dots");
    
    //Functions
    
    let curSlide = 0;
    const maxSlide = slides.length;
    
    const goToSlide = function (slide) {
      
      slides.forEach(
          
        (s, i) => {
            (s.style.transform = `translateX(${100 * (i - slide)}%)`)}
      );
    };
    
    const nextSlide = function(){

      if (curSlide === 4) {
        curSlide = 0;
      } else {
        curSlide+=1;
        console.log(curSlide);
      }
    
      goToSlide(curSlide);
    }
    
    const prevSlide = function(){
      
      if (curSlide === 0) {
        curSlide = 0;
      } else {
        curSlide-=1;
      }
    
      goToSlide(curSlide);
    }
    
    const init = function(){
      goToSlide(0);
    }
    
    init();
    
    //Event Listeners
    btnRgt.addEventListener("click", nextSlide);
    btnLft.addEventListener("click", prevSlide);
    
    document.addEventListener("keydown", function(e){
      if(e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight'&& nextSlide();
 
    }           
    );
    

    };
    
    slider();