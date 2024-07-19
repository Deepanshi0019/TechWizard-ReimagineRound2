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
    xPercent:-310,
    ease:Power4
})

// 
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



