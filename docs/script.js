  // Homepage script starts from here ///




//Homepage script ends here //



//Explore more starts from here//

gsap.to(".Card-Scroller .Card-div",{
    transform:"translateX(-64%)",
    scrollTrigger:{
     trigger:".Card-Scroller",
     scroller:"body",
     scrub:2,
     start:"top 0%",
     end:"top -150%",
     markers:false,
     pin:true
    }
 })



 
let imgs = document.querySelectorAll(".IMG-CONT");
let texts = document.querySelectorAll(".hover-text");

imgs.forEach((img, index) => {
    img.addEventListener("mousemove", function(event) {
        texts[index].classList.remove('hidden');
        gsap.to(texts[index], {
            x: event.offsetX,
            y: event.offsetY,
            duration: 0.3,
            ease: "ease.in",
            
        });
    });

    img.addEventListener('mouseleave', function() {
        texts[index].classList.add('hidden');
    });
});
