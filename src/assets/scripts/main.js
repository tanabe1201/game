'use strict';

var $body = $("body");

$(document).ready(function () {

  $('.js-draw--trigger').on('click', function () {
    $('.js-draw--trigger').toggleClass('is-active');
    $('.js-draw--content').toggleClass('is-active');
    $('.js-draw--bg').toggleClass('is-active');
    $('body').toggleClass('lock');
  })

  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var position = $(href).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    return false;
  })

  $(window).scroll(function () {
    if($(window).scrollTop() > 600) {
      $('.sc-inview').addClass('is-anim');
    } else {
      $('.sc-inview').removeClass('is-anim');
    }
  })

  const loading = $("#js-loading");

  $(window).on("load", function () {
    let windowHeight = $(window).height();
    $(".mv").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function () {
    loading.fadeOut("3000");
  }, 8000);

  $("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');
});


document.addEventListener('DOMContentLoaded', function () {

  {
    const tabTriggers = document.querySelectorAll('.js-tab--trigger');
    const tabContents = document.querySelectorAll('.js-tab--content');

    tabTriggers.forEach(function (trigger) {
      return trigger.addEventListener('click', function (e) {
        e.preventDefault();
        tabTriggers.forEach(function (trigger) {
          trigger.classList.remove('is-active');
        });
        trigger.classList.add('is-active');
        tabContents.forEach(function (content) {
          return content.classList.remove('is-active');
        });
        document.getElementById(trigger.dataset.tab).classList.add('is-active');
      });
    });
  }

  {
    const el = document.querySelectorAll('.inview');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-anim');
          }, 100);
        } else {}
      });
    }

    const options = {
      root: null,
      rootMargin: '-10% 0px',
      threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
  }

  {
    const el = document.querySelectorAll('.animate-heading');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('inview');
          // setTimeout(() => {
          // }, 600);
        } else {
          // entry.target.classList.remove('inview');
        }
      });
    }

    const options = {
      root: null,
    };

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));

    for (let el of els) {
      const chars = el.innerHTML.trim().split("");

      el.innerHTML = chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
  }
});




