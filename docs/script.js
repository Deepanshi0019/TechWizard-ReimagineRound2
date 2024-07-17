// Homepage script starts from here ///
//Explore more starts from here//
if (typeof PIXI !== "undefined") {
  console.log("PIXI.js is loaded correctly.");

  // Initialize PIXI Application
  const app = new PIXI.Application({
    view: document.getElementById("waveCanvas"),
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true,
    antialias: true, // Enable antialiasing for better visual quality
  });

  // Resize the canvas on window resize
  window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    waveSprite.width = app.screen.width;
    waveSprite.height = app.screen.height;
  });

  // Create the wave sprite
  const waveTexture = PIXI.Texture.from("/Images-home/Background.avif"); // Use your background image or a suitable texture
  const waveSprite = new PIXI.Sprite(waveTexture);

  // Scale to fit the screen
  waveSprite.width = app.screen.width;
  waveSprite.height = app.screen.height;

  // Add the sprite to the PIXI stage
  app.stage.addChild(waveSprite);

  // Create a filter to apply the wave effect
  const vertexShader = `
        attribute vec2 aVertexPosition;
        attribute vec2 aTextureCoord;
        uniform mat3 projectionMatrix;
        varying vec2 vTextureCoord;

        void main() {
            gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
            vTextureCoord = aTextureCoord;
        }
    `;

  const fragmentShader = `
        varying vec2 vTextureCoord;
        uniform sampler2D uSampler;
        uniform float time;

        void main() {
            vec2 uv = vTextureCoord;
            uv.y += sin(uv.x * 4.0 + time) * 0.01; // Adjust the wave amplitude and frequency here
            gl_FragColor = texture2D(uSampler, uv);
        }
    `;

  const waveFilter = new PIXI.Filter(vertexShader, fragmentShader, {
    time: 0,
  });

  // Apply the filter to the wave sprite
  waveSprite.filters = [waveFilter];

  // Animate the wave effect
  app.ticker.add((delta) => {
    waveFilter.uniforms.time += 0.01 * delta; // Adjust the wave speed here
  });
} else {
  console.error("PIXI.js library is not loaded properly.");
}

const Menu_Button = document.getElementById("Menu-button");
const OpenedNav = document.getElementById("opened-nav");

let click = false;

Menu_Button.addEventListener("click", function () {
  click = !click;

  if (click) {
    OpenedNav.style.display = "flex";
    OpenedNav.classList.add("visible");
  } else {
    OpenedNav.style.display = "none";
    OpenedNav.classList.remove("visible");
  }
});

const projects = document.querySelectorAll(".Project");
const preview = document.querySelector(".Preview");
const previewImage = document.querySelector(".Preview-img");

if (!projects.length || !preview || !previewImage) {
  console.error("One or more elements were not found:", {
    projectsLength: projects.length,
    preview,
    previewImage,
  });
}

let isInside = false;

const showPreview = () => {
  gsap.to(preview, { duration: 0.3, scale: 1 });
};

const hidePreview = () => {
  gsap.to(preview, { duration: 0.3, scale: 0 });
};

const movePreview = (e) => {
  const offsetX = preview.offsetWidth / 2;
  const offsetY = preview.offsetHeight / 2;
  gsap.to(preview, { duration: 0.1, left: `${e.clientX - offsetX}px`, top: `${e.clientY - offsetY}px` });
};

const changePreviewImage = (bgUrl) => {
  gsap.to(previewImage, { duration: 0.3, opacity: 0, onComplete: () => {
    previewImage.style.backgroundImage = `url(${bgUrl})`;
    gsap.to(previewImage, { duration: 0.3, opacity: 1 });
  }});
};

projects.forEach(project => {
  project.addEventListener('mouseenter', (e) => {
    showPreview();
    movePreview(e);
    changePreviewImage(project.getAttribute('data-bg'));
  });

  project.addEventListener('mousemove', movePreview);

  project.addEventListener('mouseleave', hidePreview);
});

// Adjust preview position on window resize
window.addEventListener('resize', () => {
  if (isInside) {
    // Recalculate position on resize if preview is shown
    const currentProject = document.querySelector('.Project:hover');
    if (currentProject) {
      movePreview({
        clientX: currentProject.getBoundingClientRect().left + (currentProject.offsetWidth / 2),
        clientY: currentProject.getBoundingClientRect().top + (currentProject.offsetHeight / 2)
      });
    }
  }
});





gsap.set("#Home-Section-animation", { 
  scale: 0.1, 
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

gsap.registerPlugin(ScrollTrigger);



gsap.utils.toArray('#Container-Explore-More > div').forEach((innerDiv, i) => {
  gsap.fromTo(innerDiv, 
      { opacity: 0, width: "30vw", height: "20vh" }, 
      {   
        opacity: 1, 
          width: "100vw", 
          height: "40vh", 
          scrollTrigger: {
              trigger: innerDiv,
              start: "top center+=100",
              end: "top top",
              scrub: 3,
              markers: false,
          }
      }
  );
});



