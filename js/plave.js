$(function(){

    gsap.to(".page_title", {duration:1, autoAlpha:1, scale:1, ease: Power1.easeOut, delay:1});
    gsap.to(".pic_a", {duration:1, autoAlpha:1, ease: Power1.easeOut, delay:1.5});
    gsap.to(".group", {duration:1, autoAlpha:1, ease: Power1.easeOut, delay:2});

    // 滑動觸發
    gsap.registerPlugin(ScrollTrigger);
    const tl_a = gsap.timeline({
        scrollTrigger: {
          trigger: "#yejun",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_a.to("#yejun", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_b = gsap.timeline({
        scrollTrigger: {
          trigger: "#noah_pc",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_b.to("#noah_pc", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_c = gsap.timeline({
        scrollTrigger: {
          trigger: "#noah_mb",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_c.to("#noah_mb", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_d = gsap.timeline({
        scrollTrigger: {
          trigger: "#bamby",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_d.to("#bamby", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_e = gsap.timeline({
        scrollTrigger: {
          trigger: "#eunho_pc",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_e.to("#eunho_pc", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_f = gsap.timeline({
        scrollTrigger: {
          trigger: "#eunho_mb",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_f.to("#eunho_mb", {opacity: 1, duration: 1});
    gsap.registerPlugin(ScrollTrigger);
    const tl_g = gsap.timeline({
        scrollTrigger: {
          trigger: "#hamin",
          start: "top 55%",
          end: "top 25%",
          scrub: 1,
          pin: false,
          markers: false
        }
    });
    tl_g.to("#hamin", {opacity: 1, duration: 1});

    

})