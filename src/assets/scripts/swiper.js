"use strict";

const sliderWrap = document.querySelectorAll('.js-slider-wrap');
const sliderThumb = document.querySelectorAll('.js-slider-thumb');
const sliderMain = document.querySelectorAll('.js-slider-main');
for (let i = 0; i < sliderWrap.length; i++) {
  const num = ('00' + (i + 1)).slice(-2);
  sliderWrap[i].className += (num);
  sliderThumb[i].className += (num);
  sliderMain[i].className += (num);
  const swiperThumb = new Swiper('.js-slider-thumb' + (num), {
    slidesPerView: 'auto',
  });


  let prev = sliderWrap[i].querySelector('.js-slider-btnPrev');
  let next = sliderWrap[i].querySelector('.js-slider-btnNext');

  var swiperMain = new Swiper('.js-slider-main' + (num), {
    slidesPerView: 'auto',
    effect: 'slide',
    grabCursor: true,
    touchEventsTarget: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    thumbs: {
      swiper: swiperThumb,
    },
  });
}


const swiper01 = new Swiper('.p-movie-slider__container', {
  slidesPerView: 'auto',
  grabCursor: true,
  navigation: {
    prevEl: '.p-movie-slider__btnPrev',
    nextEl: '.p-movie-slider__btnNext',
  },
});

const swiper02 = new Swiper('.p-story-slider__container', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
});



// (function() {
//   const mySwiper_sub = new Swiper('.flow01 .swiper-sub', {
//     spaceBetween: 24,
//     grabCursor: true,
//     nested: true,
//     pagination: {
//       el: '.flow01 .swiper-pagination-sub',
//       clickable: true,
//     },
//   });

//   const mySwiper_main = new Swiper('.flow01 .swiper-main', {
//     spaceBetween: 24,
//     centeredSlides: true,
//     grabCursor: true,
//     pagination: {
//       el: '.flow01 .swiper-pagination-main',
//       clickable: true,
//       renderBullet: (index, className) => {
//         let num = ('00' + (index + 1)).slice(-2);
//         return '<span class="' + className + '"><span class="step">STEP.</span>' + num + '</span>';
//       },
//     },
//     navigation: {
//       nextEl: '.flow01 .swiper-button-next',
//       prevEl: '.flow01 .swiper-button-prev',
//     },
//     breakpoints: {
//       1025: {
//         spaceBetween: 80,
//       }
//     },
//   });
// }());



const modalSwiper = new Swiper('.js-modal-slider', {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
  autoHeight: true,
  centeredSlides: true,
  effect: "slide",
  speed: 800,
  navigation: {
    prevEl: '.js-modal--btnPrev',
    nextEl: '.js-modal--btnNext',
  },
  pagination: {
    el: '.js-modal--pagi',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return 'Image ' + ' <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    }
  },
});

$('.js-modal-open').on('click', function () {
  var index = $(this).index();
  modalSwiper.slideTo(index);
  $('.l-modal').fadeIn();
  $('body').addClass('is-lock');
})

modalSwiper.on('slideChange', function () {
  $body.attr("data-character", modalSwiper.realIndex + 1);
});


$('.js-modal-close').on('click', function () {


  $('.l-modal').fadeOut();
  $('body').removeClass('is-lock');

});

const swiper03 = new Swiper('.p-chara__slider', {
  // loop: true,
  // grabCursor: true,
  effect: 'slide',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
})

swiper03.on('slideChange', function () {
  $body.attr("data-character", swiper03.realIndex + 1);
});

$(".js-chara-tab").on("click", function () {
  $('.p-chara__item--tab').removeClass('is-active');
  $(this).addClass('is-active');
  swiper03.slideTo($(this).attr("data-num"));
});


const thumb = document.querySelectorAll('.gallery02 .thumb-media');

const switchThumb = (index) => {
  document.querySelector('.gallery02 .thumb-media-active').classList.remove('thumb-media-active');
  thumb[index].classList.add('thumb-media-active');
}

const mySwiper = new Swiper('.gallery02 .swiper', {
  effect: 'slide',
  // fadeEffect: {
  //   crossFade: true,
  // },
  speed: 800,
  navigation: {
    nextEl: '.gallery02 .swiper-button-next',
    prevEl: '.gallery02 .swiper-button-prev',
  },
  on: {
    afterInit: (swiper) => {
      thumb[swiper.realIndex].classList.add('thumb-media-active');
      for (let i = 0; i < thumb.length; i++) {
        thumb[i].onclick = () => {
          swiper.slideTo(i);
        };
      }
    },
    slideChange: (swiper) => {
      switchThumb(swiper.realIndex);
    },
  }
});