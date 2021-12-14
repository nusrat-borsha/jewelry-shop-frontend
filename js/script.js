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

//==========MODAL WINDOW=========
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');
const heroImg = document.querySelector('.hero-img-box');
const heroSect = document.querySelector('.hero-text-box');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  heroImg.classList.add('overlay');
  heroSect.classList.add('overlay');
};

const closeModal = function () {
  modal.classList.add('hidden');
  heroImg.classList.remove('overlay');
  heroSect.classList.remove('overlay');

};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); 
