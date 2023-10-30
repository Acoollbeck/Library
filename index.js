console.log(" 1. +10 \n 2. +16 \n 3. +54 \n 4. +20 \nИтого: 100 балов");

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("burger").addEventListener("click", function() {
//     document.
//   })
// })


//Profile

const account = document.querySelector('.header__account')
const profile = document.querySelector('.header__svg');
const modalRegister = document.getElementById('register');
const modalLogIn = document.getElementById('logIn');


profile.addEventListener("click", function(item) {
  account.classList.toggle('open')
  item._isClick = true;
})

modalRegister.addEventListener('click', function(item) {
  item._isClick = true;
})

document.body.addEventListener('click', function(item) {
  if(item._isClick === true) return
  account.classList.remove('open')
})




// burger

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const burgerItem = document.querySelectorAll(".header__item")

burger.addEventListener("click", function(element) {
  element._isClick = true
  document.querySelector(".header").classList.toggle("open")
  account.classList.remove('open')
})

burgerItem.forEach(function(item) {
  item.addEventListener("click", function() {
  document.querySelector(".header").classList.remove("open")
  })
})

burgerItem.forEach(function(item) {
  item.addEventListener('click', function() {
    account.classList.remove('open')
  })
})

nav.addEventListener("click", function(element) {
  element._isClick = true
})

document.body.addEventListener("click", function(element) {
  if(element._isClick == true) return
  document.querySelector(".header").classList.remove("open")
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
  winterBlock.classList.add('visibility');
  winterBlock.classList.remove('notVsblt');
  springBlock.classList.add('notVsblt');
  summerBlock.classList.add('notVsblt');
  autumnBlock.classList.add('notVsblt');

  springBlock.classList.remove('visibility');
  summerBlock.classList.remove('visibility');
  autumnBlock.classList.remove('visibility');
});

spring.addEventListener('click', function() {
  winterBlock.classList.add('notVsblt');
  springBlock.classList.add('visibility');
  springBlock.classList.remove('notVsblt');
  summerBlock.classList.add('notVsblt');
  autumnBlock.classList.add('notVsblt');

  winterBlock.classList.remove('visibility');
  summerBlock.classList.remove('visibility');
  autumnBlock.classList.remove('visibility');
});


summer.addEventListener('click', function() {
  winterBlock.classList.add('notVsblt');
  springBlock.classList.add('notVsblt');
  summerBlock.classList.add('visibility');
  summerBlock.classList.remove('notVsblt');
  autumnBlock.classList.add('notVsblt');

  winterBlock.classList.remove('visibility');
  springBlock.classList.remove('visibility');
  autumnBlock.classList.remove('visibility');
});

autumn.addEventListener('click', function() {
  winterBlock.classList.add('notVsblt');
  springBlock.classList.add('notVsblt');
  summerBlock.classList.add('notVsblt');
  autumnBlock.classList.add('visibility');
  autumnBlock.classList.remove('notVsblt');

  winterBlock.classList.remove('visibility');
  springBlock.classList.remove('visibility');
  summerBlock.classList.remove('visibility');
});


// Modal

const register = document.querySelector('.link__logIn')
const modal = document.querySelector('.modal')
const modalSvg = document.querySelector('.modal__svg')
const body = document.querySelector('.body')
const modalLog = document.querySelector('.modal__log')
const registerLink = document.querySelector('.link__register')
const closeRegister = document.querySelector('.modal__close--register')
const modalWindowRegister = document.querySelector('.modal__register')
const modalLinkLogin = document.querySelector('.modal__link--login')
const modalLinkRegister = document.querySelector('.modal__link--register')

register.addEventListener('click', function() {
  modal.classList.add('open')
  account.classList.remove('open')
})

modalSvg.addEventListener('click', function(){
  modal.classList.remove('open')
  modal.classList.remove('open--register')
})

modalLog.addEventListener('click', function(event) {
  event._isClickModal = true
})

modalWindowRegister.addEventListener('click', function(event){
  event._isClickModal = true
})

modal.addEventListener('click', function(event){
  if (event._isClickModal === true) {
    return
  } else {
    modal.classList.remove('open')
    modal.classList.remove('open--register')
  }
})


registerLink.addEventListener('click', function () {
  modal.classList.add('open--register')
  account.classList.remove('open')
})

closeRegister.addEventListener('click', function() {
  modal.classList.remove('open--register')
})

modalLinkLogin.addEventListener('click', function(){
  modal.classList.remove('open--register')
  modal.classList.add('open')
})

modalLinkRegister.addEventListener('click', function(){
  modal.classList.add('open--register')
  modal.classList.remove('open')
})

