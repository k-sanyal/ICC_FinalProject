class IntroScene {
  constructor(main) {
    this.main = main;
    this.buttonHover = false;
  }

  start() {}

  draw() {
    background(20);
    fill(255);
    textSize(38);
    textAlign(CENTER);
    text("Hidden Meanings: An Interactive Exploration", width/2, height/2 - 80);

    textSize(18);
    text("An experiment in dual imagery, metaphor, and participation.", width/2, height/2 - 20);

    let bx = width/2 - 100;
    let by = height/2 + 40;
    let bw = 200;
    let bh = 60;

    this.buttonHover =
      mouseX > bx && mouseX < bx + bw && mouseY > by && mouseY < by + bh;

    fill(this.buttonHover ? 220 : 180);
    rect(bx, by, bw, bh, 10);

    fill(20);
    textSize(22);
    text("Begin", width/2, by + 38);
  }

  mousePressed() {
    if (this.buttonHover) {
      this.main.showScene("sketch4");
    }
  }
}
