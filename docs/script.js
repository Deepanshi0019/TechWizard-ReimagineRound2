//   // Homepage script starts from here //

// const ParticleDiameter = 4;
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// const particles = [];

// const img = new Image();
// img.src = "/Images-home/image4.jpg"; // Ensure this path is correct and the image exists

// img.addEventListener("load", () => {
//     const aspectRatio = img.width / img.height;

//     // Determine canvas size to fit the image within the window
//     if (window.innerWidth / window.innerHeight > aspectRatio) {
//         canvas.height = window.innerHeight;
//         canvas.width = window.innerHeight * aspectRatio;
//     } else {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerWidth / aspectRatio;
//     }

//     // Draw the image scaled to the new canvas size
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

//     const numRows = Math.round(canvas.height / ParticleDiameter);
//     const numColumns = Math.round(canvas.width / ParticleDiameter);

//     for (let row = 0; row < numRows; row++) {
//         for (let column = 0; column < numColumns; column++) {
//             const x = column * ParticleDiameter;
//             const y = row * ParticleDiameter;
//             const pixelIndex = (y * canvas.width + x) * 4;

//             const red = imageData[pixelIndex];
//             const green = imageData[pixelIndex + 1];
//             const blue = imageData[pixelIndex + 2];
//             const alpha = imageData[pixelIndex + 3];

//             particles.push({
//                 x: x,
//                 y: y,
//                 color: `rgba(${red},${green},${blue},${alpha / 255})`,
//                 originalX: x,
//                 originalY: y
//             });
//         }
//     }

//     drawParticles();
// });

// function drawParticles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach((particle) => {
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, ParticleDiameter / 2, 0, 2 * Math.PI);
//         ctx.fillStyle = particle.color;
//         ctx.fill();
//     });

//     updateParticles(); // Update particle positions based on mouse

//     requestAnimationFrame(drawParticles);
// }

// let mouseX = Infinity;
// let mouseY = Infinity;

// canvas.addEventListener('mousemove', (event) => {
// const canvasRect = canvas.getBoundingClientRect();
// mouseX = event.clientX - canvasRect.left;
// mouseY = event.clientY - canvasRect.top;
// });
// function updateParticles() {
// const RepelRadius = 300;

// particles.forEach((particle) => {
// const distanceFromMouseX = mouseX - particle.x;
// const distanceFromMouseY = mouseY - particle.y;
// const distanceFromMouse = Math.sqrt(distanceFromMouseX ** 2 + distanceFromMouseY ** 2);

// if (distanceFromMouse < RepelRadius) {
//     const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
//     const force = (RepelRadius - distanceFromMouse) / RepelRadius;
//     const moveX = Math.cos(angle) * force * 5;
//     const moveY = Math.sin(angle) * force * 5;

//     particle.x += moveX;
//     particle.y += moveY;
// } else {
//     // Return to the original position gradually
//     particle.x += (particle.originalX - particle.x) * 0.05;
//     particle.y += (particle.originalY - particle.y) * 0.05;
// }
// });
// }



// canvas.addEventListener('mouseleave', () => {
//     mouseX = Infinity;
//     mouseY = Infinity;
// });

// function updateParticles() {
// const RepelRadius = 50;

// particles.forEach((particle) => {
// const distanceFromMouseX = mouseX - particle.x;
// const distanceFromMouseY = mouseY - particle.y;
// const distanceFromMouse = Math.sqrt(distanceFromMouseX ** 2 + distanceFromMouseY ** 2);

// if (distanceFromMouse < RepelRadius) {
//     const angle = Math.atan2( distanceFromMouseX,distanceFromMouseY);
//     const force = (RepelRadius - distanceFromMouse) / RepelRadius;
//     const moveX = Math.cos(angle) * force * 5;
//     const moveY = Math.sin(angle) * force * 5;

//     particle.x -= moveX;
//     particle.y -= moveY;
// } else {
//     // Return to the original position gradually
//     particle.x += (particle.originalX - particle.x) * 0.05;
//     particle.y += (particle.originalY - particle.y) * 0.05;
// }
// });
// }


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
     markers:true,
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
