gsap.to(".slide",{
    scrollTrigger: {
        trigger: ".dining",
        start: "top top",
        end: "bottom bottom",
        scrub:1
    },
    xPercent:-400,
    ease:Power4
})
gsap.to(".slides",{
    scrollTrigger: {
        trigger: ".dine",
        start: "top top",
        end: "bottom bottom",
        scrub:1
    },
    xPercent:-400,
    ease:Power4
})
