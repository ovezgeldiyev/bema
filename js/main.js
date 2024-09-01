// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
// menu end

// scroll start
let header = document.getElementById("header");
let banner = document.getElementById("banner");
function scrollFunc() {
  if (header.classList.contains("uniq")) {
    if (window.scrollY >= banner.offsetTop) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } else {
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// sliders
$(function () {
  $(".property__inner-slider").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// connected sliders
$(function () {
  $(".newsItem__slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".newsItem__swiper",
  });
});
$(function () {
  $(".newsItem__swiper").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    speed: 600,
    asNavFor: ".newsItem__slider",
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 4.6,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// custom arrows
$(".info__inner-slider").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $slickElement.next().find(".prev"),
    nextArrow: $slickElement.next().find(".next"),
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const careerCircle = document.getElementById("careerCircle");
const circleTrigger = document.getElementById("circleTrigger");
if (careerCircle) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= circleTrigger.offsetTop - window.innerHeight - 30) {
      careerCircle.classList.add("active");
    } else {
      careerCircle.classList.remove("active");
    }
  });
}
