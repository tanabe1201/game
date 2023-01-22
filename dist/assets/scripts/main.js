'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $body = $("body");
$(document).ready(function () {
  $('.js-draw--trigger').on('click', function () {
    $('.js-draw--trigger').toggleClass('is-active');
    $('.js-draw--content').toggleClass('is-active');
    $('.js-draw--bg').toggleClass('is-active');
    $('body').toggleClass('lock');
  });
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var position = $(href).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    return false;
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $('.sc-inview').addClass('is-anim');
    } else {
      $('.sc-inview').removeClass('is-anim');
    }
  });
  var loading = $("#js-loading");
  $(window).on("load", function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
    loading.delay("1000").fadeOut("2000");
  }); //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする

  setTimeout(function () {
    loading.fadeOut("3000");
  }, 8000);
  $("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');
});
document.addEventListener('DOMContentLoaded', function () {
  {
    var tabTriggers = document.querySelectorAll('.js-tab--trigger');
    var tabContents = document.querySelectorAll('.js-tab--content');
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
    var el = document.querySelectorAll('.inview');
    var els = Array.prototype.slice.call(el);

    var cb = function cb(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('is-anim');
          }, 100);
        } else {}
      });
    };

    var options = {
      root: null,
      rootMargin: '-10% 0px',
      threshold: 0
    };
    var io = new IntersectionObserver(cb, options);
    els.forEach(function (el) {
      return io.observe(el);
    });
  }
  {
    var _el = document.querySelectorAll('.animate-heading');

    var _els = Array.prototype.slice.call(_el);

    var _cb = function _cb(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview'); // setTimeout(() => {
          // }, 600);
        } else {// entry.target.classList.remove('inview');
        }
      });
    };

    var _options = {
      root: null
    };

    var _io = new IntersectionObserver(_cb, _options);

    _els.forEach(function (el) {
      return _io.observe(el);
    });

    var _iterator = _createForOfIteratorHelper(_els),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _el2 = _step.value;

        var chars = _el2.innerHTML.trim().split("");

        _el2.innerHTML = chars.reduce(function (acc, curr) {
          curr = curr.replace(/\s+/, '&nbsp;');
          return "".concat(acc, "<span class=\"char\">").concat(curr, "</span>");
        }, "");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});