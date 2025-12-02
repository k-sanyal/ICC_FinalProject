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
