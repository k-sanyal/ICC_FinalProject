let img, invertedImg;

function preload() {
  img = loadImage('images/02.jpg'); // original Noma Bar illustration
}

function setup() {
  createCanvas(949, 512); // use your image size
  pixelDensity(1);
  invertedImg = createGraphics(width, height);
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);
  
  // Create inverted version once
  if (frameCount === 1) {
    invertedImg.image(img, 0, 0, width, height);
    invertedImg.loadPixels();
    for (let i = 0; i < invertedImg.pixels.length; i += 4) {
      invertedImg.pixels[i] = 255 - invertedImg.pixels[i];       // R
      invertedImg.pixels[i + 1] = 255 - invertedImg.pixels[i+1]; // G
      invertedImg.pixels[i + 2] = 255 - invertedImg.pixels[i+2]; // B
    }
    invertedImg.updatePixels();
  }

  // Reveal amount based on mouse position
  let revealWidth = constrain(mouseX, 0, width);
  let imgPart = invertedImg.get(0, 0, revealWidth, height);
  image(imgPart, 0, 0, revealWidth, height);

  // Optional: vertical line separator
  stroke(255, 100);
  line(revealWidth, 0, revealWidth, height);
}
