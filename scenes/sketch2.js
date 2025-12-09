let spotlightImg;

class Scene2 {
  constructor(main) {
    this.main = main;
    this.img = null;

    this.maskG = null;
    this.spotlightOn = true;

    this.metaphorTyper = null;
  }

  start() {
    this.img = loadImage("images/02.jpg");
    this.maskG = createGraphics(1000, 1000);

    this.metaphorTyper = new TextTyper(this.getMetaphorText(), 18);
  }

  draw() {
    background(15);

    // LEFT PANEL
    push();
    fill(30);
    rect(0, 0, 1000, height);
    this.drawArtArea();
    pop();

    // RIGHT PANEL
    push();
    fill(240);
    rect(1000, 0, 600, height);
    fill(0);

    textSize(20);
    textAlign(LEFT, TOP);
    text("Scene 2 — The Unseen Faces", 1020, 40);

    textLeading(22);
    textSize(15);
    this.metaphorTyper.update();
    this.metaphorTyper.draw(1020, 80, 520);
    pop();
  }

  drawArtArea() {
    if (!this.img) return;

    drawCenteredImage(this.img, 0, 0, 1000, 1000);

    if (!this.spotlightOn) return;

    // Dimmed background
    push();
    tint(255, 60);
    drawCenteredImage(this.img, 0, 0, 1000, 1000);
    pop();

    // Soft spotlight mask
    this.maskG.clear();
    let g = this.maskG.drawingContext.createRadialGradient(
      mouseX, mouseY, 0,
      mouseX, mouseY, 150
    );
    g.addColorStop(0, "rgba(255,255,255,255)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    this.maskG.drawingContext.fillStyle = g;
    this.maskG.ellipse(mouseX, mouseY, 300);

    let reveal = this.img.get();
    reveal.mask(this.maskG);

    image(reveal, 0, 0, 1000, 1000);
  }

  getMetaphorText() {
    return `
Not all truths announce themselves.
Some require a shift of attention, a soft focus,
a willingness to see what hides in plain sight.

Move your cursor slowly across the image.
Let the unseen emerge through the dimness.
    `;
  }

  mousePressed() {
    if (mouseX > 1000) {
      this.main.showScene("sketch4"); // or next scene
    } else {
      this.spotlightOn = !this.spotlightOn;
    }
  }
}
