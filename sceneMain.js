class SceneMain {
  constructor() {
    this.scenes = {};
    this.current = null;
  }

  addScene(name, sceneObject) {
    this.scenes[name] = sceneObject;
  }

  showScene(name) {
    this.current = this.scenes[name];
    if (this.current.start) this.current.start();
  }

  draw() {
    if (this.current && this.current.draw) {
      this.current.draw();
    }
  }

  mousePressed() {
    if (this.current && this.current.mousePressed) {
      this.current.mousePressed();
    }
  }

  mouseMoved() {
    if (this.current && this.current.mouseMoved) {
      this.current.mouseMoved();
    }
  }
}

class TextTyper {
  constructor(text, speed) {
    this.text = text;
    this.speed = speed;
    this.index = 0;
    this.lastTime = 0;
  }

  update() {
    if (millis() - this.lastTime > this.speed && this.index < this.text.length) {
      this.index++;
      this.lastTime = millis();
    }
  }

  draw(x, y, w) {
    text(this.text.substring(0, this.index), x, y, w);
  }
}
