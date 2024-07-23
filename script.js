
document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('DOMContentLoaded', function () {
        const img = document.querySelector('#Image-width-animation');
        img.onload = function () {
            console.log('Image loaded successfully');
        };
        img.onerror = function () {
            console.error('Image failed to load');
        };
    });

        const Menu_Button = document.querySelector("#Menu-button");
        const OpenedNav = document.querySelector("#opened-nav");
      
        Menu_Button.addEventListener("click", function () {
          OpenedNav.classList.toggle("visible");
      
          // Animate text items one by one
          if (OpenedNav.classList.contains("visible")) {
            const navItems = OpenedNav.querySelectorAll(".nav-item");
            navItems.forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`;
              item.classList.add("visible");
            });
          } else {
            const navItems = OpenedNav.querySelectorAll(".nav-item");
            navItems.forEach((item) => {
              item.classList.remove("visible");
            });
          }
        });
      
      

    gsap.set("#Home-Section-animation", {
        scale:0.1,
        opacity: 1,
        height: "70vh",
        transformOrigin: "bottom",
    });

    gsap.to("#Home-Section-animation", {
        duration: 2,
        scale: 1,
        height: "100vh",
        opacity: 1,
        transformOrigin: "bottom",
        ease: "power2.out"
    });




    Shery.imageEffect("#waveCanvas img", {
        style: 2,
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -3 }, "mousemove": { "value": 0 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 215.38, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.6424447936648416 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }, "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 4.96, "range": [0, 100] }, "uFrequencyZ": { "value": 14.45, "range": [0, 100] } }
        ,
        debug: false

    })

    document.addEventListener('DOMContentLoaded', function () {
        gsap.registerPlugin(ScrollTrigger);

        // City Hotels animation
        document.querySelectorAll('.City-hotels').forEach((element) => {
            gsap.from(element, {
                y: 90,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true
                }
            });
        });

        document.querySelectorAll('.Txt-Div').forEach((element, index) => {
            let direction = index % 2 === 0 ? "-100%" : "100%"; // alternate direction
            gsap.from(element, {
                x: direction,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: true
                }
            });
        });
    });



    let Container = document.querySelector("#Explore-More-Page");
    const data = [
        {
            number: "01.",
            heading: "City Hotels.",
            para: "Renowned as city landmarks, Taj Hotels welcome guests with an extraordinary level of service",
            imgSrc: "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
            textDiv: {
                heading: "Explore Our City Hotels",
                subheading: "HAVENS OF LUXURY AND COMFORT ----",
                description: "Renowned as city landmarks, Taj Hotels welcome guests with an extraordinary level of service, comfort and warmth. Each of our luxury hotels sets an example of magnificence with tastefully designed spaces, spectacular views and world class amenities. Whether catering to business travellers or hosting."
            },
            button: "Explore >>",
            id:"Image-width-animation"
        },
        {
            number: "02.",
            heading: "IDYLLIC RESORTS.",
            para: "With breathtaking vistas, awe-inspiring experiences and gracious service, Taj Resorts are lush retreats in the most picturesque locations",
            imgSrc: "https://i.postimg.cc/y65mQcyk/image4.jpg",
            textDiv: {
                heading: "Unwind in Luxury: Idyllic Resorts",
                subheading: "SURREAL ESCAPES AMIDST PRISTINE NATURE",
                description: "With breathtaking vistas, awe-inspiring experiences and gracious service, Taj Resorts are lush retreats in the most picturesque locations across the globe. Stretched languorously beside sun-drenched beaches or ensconced within the wonder of the mountains, these havens redefine gracious living in idyllic getaways. Enjoy refreshing, luxury resort service in exotic locales – escapes that remain etched in memories."
            },
            button: "Explore >>",
            id:"Image-width-animation"
        },
        {
            number: "03.",
            heading: "Living Places.",
            para: "Rare and historic, Taj palaces transport you to an era of grandeur, steeped in an authentically royal design.",
            imgSrc: "https://i.postimg.cc/HxkwKtN7/exp3.jpg",
            textDiv: {
                heading: "Living Places: Your Home, Your Haven",
                subheading: "A WORLD OF AUTHENTIC ROYAL GRANDEUR",
                description: "Rare and historic, Taj palaces transport you to an era of grandeur, steeped in an authentically royal narrative. Splendid design, exotic art and beautiful gardens seamlessly converge, crafting mesmerising experiences that embody the grandiosity of bygone kings and queens. It is the timeless stories, eternal quests, and regal elegance that come to life in the embrace of these architectural marvels."
            },
            button: "Explore >>",
            id:"Image-width-animation"
        },
        {
            number: "04.",
            heading: "New Openings.",
            para: "Joins at our newest hotels as we set foot in new destination and create unmissable landmarks.",
            imgSrc: "https://i.postimg.cc/0NfGc4Vs/Exp5.webp",
            textDiv: {
                heading: "Join the Adventure: Discover New Openings",
                subheading: "OUR NEW HOTELS",
                description: "Tree of Life Resorts offer a discerning traveller a utopia far removed from the pressures of everyday living, and a chance to enjoy the essence of authentic India: her friendliness, hospitality and serenely balanced lifestyle."
            },
            button: "Explore >>",
            id:"Image-width-animation"

        },
        {
            number: "05.",
            heading: "ENCHANTING SAFARIS.",
            para: "Earthy lodges, untainted excursions, awe-inspiring encounters with the wilderness – Taj Safaris serve as the epitome of wildlife adventures across the globe.",
            imgSrc: "https://i.postimg.cc/nrsvVhpF/Nchas.jpg",
            textDiv: {
                heading: "Explore the Magic of Nature: Enchanting Safaris",
                subheading: "LUXURY STAYS MEET UNEXPLORED WILDERNESS",
                description: "Earthy lodges, untainted excursions, awe-inspiring encounters with the wilderness – Taj Safaris serve as the epitome of wildlife adventures across the globe. Observe wild animals in their natural habitat, cradled by the imposing jungles of the Indian subcontinent. With ancient, towering trees, choruses of forest birds and the calls of lurking wild animals."
            },
            button: "Explore >>",
            id:"Last-Image-Animation"
        }



    ];

    Container.innerHTML = "";

    const createDescriptionSpans = (description) => {
        return description.split('').map(char => `<span class="description-letter">${char}</span>`).join('');
    };
    
    data.forEach((divData, index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("w-[100vw]", "Responsive-Explore");
    
        newDiv.innerHTML = `
            <div class="Hero w-[100vw] mx-4 px-[3vmin] mt-[8vw] flex ${index % 2 === 0 ? '' : 'flex-row-reverse'} gap-[10vmin]">
                <div id="City-hotels" class="City-hotels w-[60vmin] h-[60vmin] ${index % 2 === 0 ? '' : 'pr-[2vmin]'}">
                    <h5>${divData.number}</h5>
                    <h1 id="Text-Anime" class="text-[2vmin] font-bold py-1">${divData.heading}</h1>
                    <p class="leading-[1] opacity-[.5] py-2">${divData.para}</p>
                    <div class="City-Hotel-img w-[100%] h-[60vmin] mt-2">
                        <img id="${divData.id}" class="h-full w-full object-cover" src="${divData.imgSrc}" alt="">
                    </div>
                </div>
                <div class="w-1/2 h-[72.5vmin] hidden md:flex justify-end ${index % 2 === 0 ? 'border-l-[5px]' : 'border-r-[5px]'} border-[#AD8B3A]">
                    <div class="Txt-Div h-full w-full p-[5vmin]">
                        <h1 class="text-[6vmin]">${divData.textDiv.heading}</h1>
                        <h4>${divData.textDiv.subheading}</h4>
                        <h2 class="text-[3vmin] pt-[4vmin]">${createDescriptionSpans(divData.textDiv.description)}</h2>
                        <button class="p-[2.5vmin] bg-[#AD8B3A] hover:bg-inherit border border-[#AD8B3A] ease-linear duration-75 rounded-full mt-[5vmin]">${divData.button}</button>
                    </div>
                </div>
            </div>
        `;
    
        Container.appendChild(newDiv);
    });
    
    window.addEventListener('scroll', () => {
        const letters = document.querySelectorAll('.description-letter');
        const triggerPoint = window.innerHeight / 5 * 4; 
    
        letters.forEach((letter, index) => {
            const letterTop = letter.getBoundingClientRect().top;
    
            if (letterTop < triggerPoint) {
                letter.style.opacity = Math.min((triggerPoint - letterTop) / 50, 1);
            } else {
                letter.style.opacity = 0;
            }
        });
    
        const cityHotels = document.querySelectorAll('.City-hotels');
        const textDivs = document.querySelectorAll('.Txt-Div');
    
        cityHotels.forEach(cityHotel => {
            const cityHotelTop = cityHotel.getBoundingClientRect().top;
            if (cityHotelTop < triggerPoint) {
                cityHotel.classList.add('show');
            } else {
                cityHotel.classList.remove('show');
            }
        });
    
        textDivs.forEach(textDiv => {
            const textDivTop = textDiv.getBoundingClientRect().top;
            if (textDivTop < triggerPoint) {
                textDiv.classList.add('fade-in');
            } else {
                textDiv.classList.remove('fade-in');
            }
        });
    });
    
    
    function applyImageEffects() {

    Shery.imageEffect("#Image-width-animation", {
        style: 3,
        config: { "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 4.96, "range": [0, 100] }, "uFrequencyZ": { "value": 14.45, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        debug: false,

    })
    Shery.imageEffect("#Last-Image-Animation", {
        style: 2,
        config: { "uFrequencyX": { "value": 11.57, "range": [0, 100] }, "uFrequencyY": { "value": 4.96, "range": [0, 100] }, "uFrequencyZ": { "value": 14.45, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 18.7 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
        ,
        debug: false,

    })


}
window.addEventListener('load', applyImageEffects);

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

//        Latika section

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
    xPercent:-300,
    ease:Power4
})

// events
var elem = document.querySelectorAll(".elem");
var events = document.querySelector(".events");
var currentIndex = 0;
var hoverInterval;
var isHovering = false;
var lastHoveredElement = null;

elem.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        isHovering = true;
        clearInterval(hoverInterval); // Stop the automatic hover sequence
        if (lastHoveredElement) {
            removeHoverStyles(lastHoveredElement); // Remove hover styles from the last hovered element
        }
        applyHoverStyles(e);
        lastHoveredElement = e;
    });

    e.addEventListener("mouseleave", function() {
        isHovering = false;
        removeHoverStyles(e);
        startAutomaticHover(); // Restart the automatic hover sequence
    });
});

function applyHoverStyles(element) {
    var bgimg = element.getAttribute("data-img");
    events.style.backgroundImage = `url(${bgimg})`;
    element.querySelector(".moving").style.transform = "translate(0, -50%) scaleY(1)";
    var movingInElements = element.querySelectorAll(".moving .moving-in h5");
    movingInElements.forEach(function(movingInElement) {
        movingInElement.style.opacity = "1";
    });
    var h2Element = element.querySelector("h2");
    h2Element.style.fontFamily = "'Freight Italic', serif"; // Change to the italic variant and fallback to serif
    h2Element.style.color = "black"; // Change text color to black
}

function removeHoverStyles(element) {
    if (element) {
        element.querySelector(".moving").style.transform = "translate(0, -50%) scaleY(0)";
        var movingInElements = element.querySelectorAll(".moving .moving-in h5");
        movingInElements.forEach(function(movingInElement) {
            movingInElement.style.opacity = "0";
        });
        var h2Element = element.querySelector("h2");
        h2Element.style.fontFamily = "'Freight Normal', sans-serif"; // Revert to normal variant and fallback to sans-serif
        h2Element.style.color = "white"; // Revert text color
    }
}

function startAutomaticHover() {
    clearInterval(hoverInterval); // Clear any existing interval
    hoverInterval = setInterval(function() {
        if (!isHovering) {
            var currentElem = elem[currentIndex];
            if (lastHoveredElement) {
                removeHoverStyles(lastHoveredElement); // Remove hover styles from the last hovered element
            }
            applyHoverStyles(currentElem);
            lastHoveredElement = currentElem;

            setTimeout(function() {
                if (!isHovering) { // Only remove styles if not hovering manually
                    removeHoverStyles(currentElem);
                }
            }, 1500); // Keep hover styles for 1.5 seconds

            currentIndex = (currentIndex + 1) % elem.length;
        }
    }, 2000); // Change element every 2 seconds
}

startAutomaticHover(); // Start the automatic hover sequence

});
