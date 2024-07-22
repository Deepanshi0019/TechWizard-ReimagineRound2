var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  const dealCountDiv = document.querySelector(".deal-count");

        // Add event listeners to pause and resume the animation
        dealCountDiv.addEventListener("mouseenter", () => {
            swiper.autoplay.stop();
        });

        dealCountDiv.addEventListener("mouseleave", () => {
            swiper.autoplay.start();
        });