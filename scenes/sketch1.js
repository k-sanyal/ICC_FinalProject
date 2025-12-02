let img, maskG;
let spotlightOn = true;


function preload() {
  img = loadImage('02_Nomabar_tp310310.jpg'); // 02_Nomabar_tp310310.jpg
}

function setup() {
  createCanvas(646, 439);
  maskG = createGraphics(width, height);
  noCursor(); //
}

function draw() {
  background(0);
  
  if (!spotlightOn) {
    // When spotlight is OFF → show normal image fully
    tint(255, 255);
    image(img, 0, 0, width, height);
  } else {
    // When spotlight is ON → dim image and reveal under cursor
    tint(255, 60);
    image(img, 0, 0, width, height);
  
  // Draw dimmed image first
  tint(255, 60);
  image(img, 0, 0, width, height);
  
  // Create soft circular mask around mouse
  maskG.clear();
  let grad = maskG.drawingContext.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 120);
  grad.addColorStop(0, 'rgba(255,255,255,255)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  maskG.drawingContext.fillStyle = grad;
  maskG.ellipse(mouseX, mouseY, 240);
  
  // Apply mask to full image
  let reveal = img.get();
  reveal.mask(maskG);
  
  // Draw revealed area
  tint(255, 255);
  image(reveal, 0, 0, width, height);
  }
}

function mousePressed() {
  spotlightOn = !spotlightOn;
}
