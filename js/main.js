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





const digitalTxt = new SplitType(".sc-digital .desc", {
  types: "words, chars",
});

const digitalTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-digital .fixed",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    pin: true,
    // markers: true,
    onEnter: function () {
      document.querySelector(".header .btn-menu").classList.remove("invert");
    },
    onLeave: function () {
      document.querySelector(".header .logo").classList.remove("invert");
      document.querySelector(".sc-brand .col-2").classList.add("out");
    },
    onEnterBack: function () {
      document.querySelector(".header .logo").classList.add("invert");
      document.querySelector(".sc-brand .col-2").classList.remove("out");
    },
    onLeaveBack: function () {
      document.querySelector(".header .btn-menu").classList.add("invert");
    },
  },
  ease: "none",
});
digitalTl.to(".sc-digital .fixed", { x: 0 });

const digitalTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-digital .fixed",
    start: "5% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
digitalTxtTl.to(".sc-digital .desc .char", { opacity: 1, stagger: 0.2 });





const garderTxt = new SplitType(".sc-garder .txt", {
  types: "chars",
});
document.querySelectorAll(".sc-garder .txt .char").forEach((item, index) => {
  const windowX = window.innerWidth;
  const translateX = windowX * (index + 1);
  const rotate = 25 * (index + 1);
  gsap.set(item, {
    x: `${translateX}`,
    rotation: `${rotate}`
  });
});
const garderTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-garder .fixed",
    start: "-85% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
garderTl
  .from(".sc-garder .bg", { yPercent: -70, rotation: 40, duration:.5 }, "a")
  .to(".sc-garder .txt .char", { x: 0, rotation: 0, stagger: 0.01 }, "a")
;
const garderTxtTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-garder .fixed",
    start: "0% 0%",
    end: "400% 100%",
    scrub: 0,
    pin: true,
    // markers: true,
  },
  ease: "none",
});
garderTxtTl
  .to(".sc-garder .txt .char", { color: "#002921", duration: 0.01, }, "b")
  .to(".sc-garder .bg svg", { fill: "#f0ff3d", duration: 0.01 }, "b")
  .to(".sc-garder .bg svg path",{ stroke: "#f0ff3d", opacity: 1, duration: 0.01,},"b")
  .to(".sc-garder .bg", { scale: 3, rotation: -180 }, "c")
  .to(".sc-garder .txt", { scale: 1.5 }, "c")
  .to(".sc-garder .txt .char", { visibility: "hidden", stagger: 0.1 })
;




const introTxt = new SplitType(".sc-intro .txt", {
  types: "lines, words",
});

ScrollTrigger.create({
  trigger: ".sc-intro",
  start: "-50% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});

const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 50%",
    end: "70% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
introTl.from(".sc-intro .txt .word",{ yPercent: 100, stagger: 0.05 });







const pushBtnTxt1 = new SplitType(".sc-push .btn-pop-1 .letter", {
  types: "chars",
});
const pushBtnTxt2 = new SplitType(".sc-push .btn-pop-2 .letter", {
  types: "chars",
});

ScrollTrigger.create({
  trigger: ".sc-push",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
});

const pushTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    pin: ".sc-push .bg",
    // markers: true,
  },
  ease: "none",
});
pushTl
  .to(".sc-push .bg .line1",{ xPercent: -10, yPercent: -110, rotation: -30 },"a")
  .to(".sc-push .bg .line2",{ xPercent: 20, yPercent: -120, rotation: 50 },"a")
  .to(".sc-push .bg .line3",{ xPercent: 10, yPercent: -180, rotation: 40 },"a"
);

const pushBtnTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push .btn-pop-1",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
document.querySelectorAll(".sc-push .btn-pop-1 .letter .char")
  .forEach((item, index) => {
    pushBtnTl1.fromTo(item,
      { yPercent: (index + 1) * 20, rotation: (index + 1) * 10 },
      { yPercent: (index + 1) * -20, rotation: (index + 1) * -10 },
      "a"
    );
  })
;

const pushBtnTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-push .btn-pop-2",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
document.querySelectorAll(".sc-push .btn-pop-2 .letter .char")
  .forEach((item, index) => {
    pushBtnTl2.fromTo(item,
      { yPercent: (4 - index) * 20, rotation: (4 - index) * -10 },
      { yPercent: (4 - index) * -20, rotation: (4 - index) * 10 },
      "a"
    );
  })
;







ScrollTrigger.create({
  trigger: ".sc-invert .top",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});

ScrollTrigger.create({
  trigger: ".sc-invert .bottom",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.add("invert");
  },
});

const invertTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-invert .bottom",
    start: "0% 100%",
    end: "100% 0%",
    // markers: true,
    scrub: true,
    pin: ".sc-invert .bottom .fixed",
    onUpdate: (self) => {
      // 좌측 이미지
      const imgLength = document.querySelectorAll(".sc-invert .bottom .image").length;
      const imgIndex = Math.round(self.progress * (imgLength - 1));
      const currentImage = document.querySelector(".sc-invert .bottom .image.show");
      const newImage = document.querySelectorAll(".sc-invert .bottom .image")[imgIndex];

      // 우측 텍스트
      const txtIndex = Math.round(self.progress * 2);
      const currentTxt = document.querySelector(".sc-invert .bottom .fixed .txt.show");
      const newTxt = document.querySelectorAll(".sc-invert .bottom .fixed .txt")[txtIndex];

      if (currentImage) {
        currentImage.classList.remove("show");
      }
      if (newImage) {
        newImage.classList.add("show");
      }
      if (currentTxt) {
        currentTxt.classList.remove("show");
      }
      if (newTxt) {
        newTxt.classList.add("show");
      }
    },
  },
  ease: "none",
});








ScrollTrigger.create({
  trigger: ".sc-attend",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
});
const attendTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-attend",
    start: "0% 20%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
  ease: "none",
});
attendTl.to(".sc-attend .box", { yPercent: 100 });






ScrollTrigger.create({
  trigger: ".sc-desole",
  start: "0% 0%",
  end: "100% 100%",
  // markers: true,
  ease: "none",
  onEnter: function () {
    document.querySelector(".header .logo").classList.add("invert");
    document.querySelector(".header .btn-menu").classList.add("invert");
  },
  onLeaveBack: function () {
    document.querySelector(".header .logo").classList.remove("invert");
    document.querySelector(".header .btn-menu").classList.remove("invert");
  },
});