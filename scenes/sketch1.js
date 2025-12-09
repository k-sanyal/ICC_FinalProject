class Scene1 {
  constructor(main) {
    this.main = main;
    this.img = null;

    this.maskLayer = null;
    this.brushSize = 120;

    this.metaphorTyper = null;
  }

  start() {
    this.img = loadImage("images/01.png");

    // create mask layer for reveal effect
    this.maskLayer = createGraphics(1000, 1000);
    this.maskLayer.fill(0, 255);
    this.maskLayer.rect(0, 0, 1000, 1000);

    this.metaphorTyper = new TextTyper(this.getMetaphorText(), 20);
  }

  draw() {
    background(15);

    // LEFT PANEL
    push();
    fill(30);
    rect(0, 0, 1000, height);
    this.drawArtArea();
    pop();

    // RIGHT PANEL (text)
    push();
    fill(240);
    rect(1000, 0, 600, height);

    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Scene 1 — The Silent Duality", 1020, 20);

    textSize(15);
    this.metaphorTyper.update();
    this.metaphorTyper.draw(1020, 80, 560);
    pop();
  }

  drawArtArea() {
    if (!this.img) return;

    // Show the base image
    image(this.img, 0, 0, 1000, 1000);

    // Overlay the dark mask layer
    image(this.maskLayer, 0, 0);

    // Show preview circle
    if (mouseX < 1000) {
      noFill();
      stroke(255, 150);
      ellipse(mouseX, mouseY, this.brushSize);
    }

    // If dragging → erase mask on that layer
    if (mouseIsPressed && mouseX < 1000) {
      this.eraseCircle(mouseX, mouseY, this.brushSize / 2);
    }
  }

  eraseCircle(cx, cy, r) {
    this.maskLayer.loadPixels();
    for (let x = cx - r; x < cx + r; x++) {
      for (let y = cy - r; y < cy + r; y++) {
        if (dist(x, y, cx, cy) < r) {
          let idx = 4 * (y * this.maskLayer.width + x);
          this.maskLayer.pixels[idx + 3] = 0; // alpha
        }
      }
    }
    this.maskLayer.updatePixels();
  }

  getMetaphorText() {
    return `
“Sometimes what we see first is only the surface of a deeper truth.”

Drag your cursor across the left image.
The hidden form appears not because it changes,
but because you choose to reveal it.

Meaning lives in the space between
what is shown and what is uncovered.

(Adapted from Italo Calvino’s ‘Six Memos for the Next Millennium’)
    `;
  }

  mousePressed() {
    // go to next scene only if on the right side
    if (mouseX > 1000) {
      this.main.showScene("sketch2");
    }
  }
}
