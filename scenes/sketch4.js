class Scene4 {
  constructor(main) {
    this.main = main;
    this.img = null;
  }

  start() {
    this.img = loadImage("images/image1.png"); // 
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
    text("Scene 1 — The Silent Duality", 1020, 20);

    textSize(15);
    text(this.getMetaphorText(), 1020, 80, 560, height - 100);
    pop();
  }

  drawArtArea() {
    if (!this.img) return;

    // EXAMPLE: dimmed background + spotlight reveal
    image(this.img, 0, 0, 1000, 1000);

    push();
    fill(0, 150);
    rect(0, 0, 1000, 1000);
    pop();

    // reveal
    push();
    eraser(1);
    circle(mouseX, mouseY, 200);
    noEraser();
    pop();
  }

  getMetaphorText() {
    return `
“Sometimes what we see first is only the surface of a deeper truth.”

Hover your cursor over the image on the left.
The hidden form reveals itself—not because it changes,
but because you choose to look differently.

This scene is inspired by the idea that
meaning does not belong solely to the artwork,
but emerges in the space between the viewer and the seen.

(Adapted from ideas in Italo Calvino’s ‘Six Memos for the Next Millennium’)
    `;
  }

  mousePressed() {
    // move to next scene
    this.main.showScene("scene1");
  }
}
