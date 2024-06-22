gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
  trigger: ".sc-brand .col-2",
  start: "-1% 100%",
  end: "0% 0%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("hide");
  },
  onLeave: function () {
    document.querySelector(".header .logo").classList.remove("hide");
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
    document.querySelector(".sc-brand .col-2").classList.add("off");
  },
  onEnterBack: function () {
    document.querySelector(".header .logo").classList.add("hide");
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
    document.querySelector(".sc-brand .col-2").classList.remove("off");
  },
});

const brandImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-brand .col-2",
    start: "0% 100%",
    end: "75% 100%",
    scrub: true,
    // markers: true,
  },
  ease: "none",
});
brandImgTl
  .to(".logo-full", { yPercent: -400 }, "a")
  .to(".sc-brand .col-2 .img-box .img1",
  { xPercent: 30, yPercent: -10, rotation: 30 },"a")
  .to(".sc-brand .col-2 .img-box .img1 > img", { rotate: -30 }, "a")
  .to(".sc-brand .col-2 .img-box .img2",
  { xPercent: 20, yPercent: 50, rotation: -30 },"a")
  .to(".sc-brand .col-2 .img-box .img1 > video", { rotate: 30 }, "a")
  .to(".sc-brand .col-2 .img-box .img3",
  { xPercent: -90, yPercent: 30, rotation: 20 },"a")
  .to(".sc-brand .col-2 .img-box .img3 > img", { rotate: -20 }, "a")
;

const brandTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-brand .col-2",
    start: "0% 100%",
    end: "40% 0",
    scrub: 0,
    // markers: true,
  },
});
brandTxtTl
  .to(".sc-brand .fixed-1 .t-2 span:nth-child(1)",
  { xPercent: 20, ease: "power3.inOut" },"a")
  .to(".sc-brand .fixed-1 .t-2 span:nth-child(3)",
  { xPercent: -30, ease: "power3.inOut" },"a")
;
