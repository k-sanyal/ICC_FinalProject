let img, maskG;
let spotlightOn = true;
let doorX = 300;
let doorY = 150;
let doorWidth = 100;
let doorHeight = 300;

let dragging = false;
let offsetX = 0;

function preload() {
  img = loadImage('images/image 5.png');
}

function setup() {
  createCanvas(605, 691);
  maskG = createGraphics(width, height);
  //cursor('grabbing');
}

function draw() {
  background(0);

  drawMusicNote();

  drawDoor();

  if (doorX < 220) {
    fill(255);
    textSize(24);
    text("complete!", 20, 40);
  }
}

function mousePressed() {

  if (mouseX > doorX && mouseX < doorX + doorWidth &&
      mouseY > doorY && mouseY < doorY + doorHeight) {
    dragging = true;
    offsetX = mouseX - doorX;
    cursor('grabbing');
  }
}

function mouseReleased() {
  dragging = false;
  cursor('grab');
}

function mouseDragged() {
  if (dragging) {
    doorX = mouseX - offsetX;
  }
}

function drawMusicNote() {
  noStroke();
  fill(255, 165, 0);
  ellipse(200, 300, 120, 80);
  rect(240, 80, 20, 220);

  push();
  translate(260, 80);
  rotate(radians(-8));
  rect(-5, 0, 180, 15);
  pop();
}

function drawDoor() {
  fill(0);
  rect(doorX, doorY, doorWidth, doorHeight, 5);

  fill(255);
  ellipse(doorX - 80, doorY + doorHeight / 4, 10, 10);
}
