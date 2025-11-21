let sceneNum = 1;
let btn;

function setup() {
  createCanvas(600, 400);

  btn = createButton("Next Scene");
  btn.position(20, 20);
  btn.mousePressed(changeScene);
}

function draw() {
  switch (sceneNum) {
    case 1:
      sceneOne();
      break;
    case 2:
      sceneTwo();
      break;
  }
}

function changeScene() {
  sceneNum++;
  if (sceneNum > 2) sceneNum = 1; // loop back
}
