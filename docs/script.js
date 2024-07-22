var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// Get all deal-count elements
var dealCounts = document.querySelectorAll('.deal-count');

dealCounts.forEach(function(dealCount) {
    dealCount.addEventListener('mouseover', function() {
        swiper.autoplay.stop();
    });
    dealCount.addEventListener('mouseout', function() {
        swiper.autoplay.start();
    });
});
