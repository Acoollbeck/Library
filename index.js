console.log(" 1. +10 \n 2. +16 \n 3. +54 \n 4. +20 \nИтого: 100 балов");

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("burger").addEventListener("click", function() {
//     document.
//   })
// })


// burger

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function() {
  document.querySelector(".header").classList.toggle("open")
})


// slider

const sliderBtn1 = document.querySelector(".about__btn-1");
const sliderBtn2 = document.querySelector(".about__btn-2");
const sliderBtn3 = document.querySelector(".about__btn-3");
const sliderBtn4 = document.querySelector(".about__btn-4");
const sliderBtn5 = document.querySelector(".about__btn-5");
const sliderList = document.querySelector(".about__list");

if(window.innerWidth > 768) {
  sliderBtn1.addEventListener('click', function() {
    sliderList.style = 'grid-template-columns: 33% 33% 33% 0 0';
    this.classList.add("focus")
    sliderBtn2.classList.remove("focus")
    sliderBtn3.classList.remove("focus")
  })

  sliderBtn2.addEventListener('click', function() {
    sliderList.style = 'grid-template-columns: 0 33% 33% 33% 0';
    this.classList.add("focus")
    sliderBtn1.classList.remove("focus")
    sliderBtn3.classList.remove("focus")
  })

  sliderBtn3.addEventListener('click', function() {
    sliderList.style = 'grid-template-columns: 0 0 33% 33% 33%';
    this.classList.add("focus")
    sliderBtn1.classList.remove("focus")
    sliderBtn2.classList.remove("focus")
  })

}

// slider-tablet

const sliderListItems = Array.from(sliderList.children);
const sliderBack = document.querySelector(".about__arrow-1")
const sliderNext = document.querySelector(".about__arrow-2")

if(window.innerWidth < 768) {

  sliderListItems.forEach(function (slide, index) {
    slide.dataset.index = index;
    sliderListItems[0].setAttribute('data-active', '');

    if(index !==0) {
      slide.classList.add('hidden');
    }

    slide.addEventListener('click', function() {
      slide.classList.add('hidden')
      slide.removeAttribute('data-active');

      let nextSliderIndex = +slide.dataset.index + 1;

      if (nextSliderIndex === 5) {
        nextSliderIndex = 0;
      }

      const nextSlide = sliderList.querySelector(`[data-index="${nextSliderIndex}"]`);
      nextSlide.classList.remove('hidden');
      nextSlide.setAttribute('data-active', '');
    })
  })

  sliderNext.addEventListener('click', function () {
    const currentSlide = sliderList.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    let nextSliderIndex = currentSlideIndex + 1;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

      if (nextSliderIndex === 5) {
        nextSliderIndex = 0;
      }

      const nextSlide = sliderList.querySelector(`[data-index="${nextSliderIndex}"]`);
      nextSlide.classList.remove('hidden');
      nextSlide.setAttribute('data-active', '');
  })


  sliderBack.addEventListener('click', function() {
    const currentSlide = sliderList.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    let nextSliderIndex = currentSlideIndex -1;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    if (nextSliderIndex < 0) {
      nextSliderIndex = 4;
    }
      const nextSlide = sliderList.querySelector(`[data-index="${nextSliderIndex}"]`);
      nextSlide.classList.remove('hidden');
      nextSlide.setAttribute('data-active', '');
  })
}


//Favorites

const winter = document.getElementById('Winter');
const spring = document.getElementById('Spring');
const summer = document.getElementById('Summer');
const autumn = document.getElementById('Autumn');

const winterBlock = document.querySelector('.winter');
const springBlock = document.querySelector('.spring');
const summerBlock = document.querySelector('.summer');
const autumnBlock = document.querySelector('.autumn');

winter.addEventListener('click', function() {
  winterBlock.classList.remove('hidden');
  springBlock.classList.add('hidden');
  summerBlock.classList.add('hidden');
  autumnBlock.classList.add('hidden');
});

spring.addEventListener('click', function() {
  winterBlock.classList.add('hidden');
  springBlock.classList.remove('hidden');
  summerBlock.classList.add('hidden');
  autumnBlock.classList.add('hidden');
});


summer.addEventListener('click', function() {
  winterBlock.classList.add('hidden');
  springBlock.classList.add('hidden');
  summerBlock.classList.remove('hidden');
  autumnBlock.classList.add('hidden');
});

autumn.addEventListener('click', function() {
  winterBlock.classList.add('hidden');
  springBlock.classList.add('hidden');
  summerBlock.classList.add('hidden');
  autumnBlock.classList.remove('hidden');
});
