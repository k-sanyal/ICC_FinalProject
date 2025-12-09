let main;

function preload() {

}

function setup() {
  createCanvas(1440, 1000); // wide layout
  main = new SceneMain();

  main.addScene("intro", new IntroScene(main));

  
  main.addScene("sketch1", new Scene1(main));
  main.addScene("sketch2", new Scene2(main));
  main.addScene("sketch4", new Scene4(main));
  //main.addScene("sketch3", new Scene3(main));
  
  //main

  main.showScene("intro");
}

function draw() {
  main.draw();
}

function mousePressed() {
  main.mousePressed();
}

function mouseMoved() {
  main.mouseMoved();
}
