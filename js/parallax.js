const introEnd = document.getElementById("introEnd");
window.onload = function () {
  setTimeout(function () {
    introEnd.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, 2000);
};

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".career",
      start: "top top",
      end: "bottom bottom",
      scrub: 0,
    },
  })
  .fromTo(".careerMain__title", { y: 0 }, { y: 1200 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".careerMain__text-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 0,
    },
  })
  .fromTo(".careerMain__text", { y: 0 }, { y: 300 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".corp.uniq",
      start: "top top",
      end: "bottom top",
      scrub: 0,
    },
  })
  .fromTo(".corpItem.first", { y: 0 }, { y: 100 }, 0)
  .fromTo(".corpItem.second", { y: 0 }, { y: 400 }, 0)
  .fromTo(".corpItem.third", { y: 0 }, { y: 800 }, 0)
  .fromTo(".corpItem.fourth", { y: 0 }, { y: 1100 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".corp__inner-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 0,
    },
  })
  .fromTo(".corp__inner-text", { y: 0 }, { y: 400 }, 0);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: "bottom top",
      scrub: 0,
    },
  })
  .fromTo(".projectBanner__content-foot", { y: 0 }, { y: -20 }, 0)
  .fromTo(".projectItem.sm", { y: 0 }, { y: 20 }, 0)
  .fromTo(".projectItem.big", { y: 0 }, { y: -10 }, 0);


