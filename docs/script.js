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


//   Working fine ==========//
// Ensure PIXI is loaded
if (typeof PIXI !== 'undefined') {
    console.log('PIXI.js is loaded correctly.');

    // Initialize PIXI Application
    const app = new PIXI.Application({
        view: document.getElementById('waveCanvas'),
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: true,
    });

    // Resize the canvas on window resize
    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    // Create the wave sprite
    const waveTexture = PIXI.Texture.from('/Images-home/Background.avif'); // Use your background image or a suitable texture
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
    console.error('PIXI.js library is not loaded properly.');
}   