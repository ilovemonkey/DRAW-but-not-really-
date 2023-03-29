let img;
let penColor = [0, 0, 255]; // default blue color
let isMousePressed = false; // track mouse press state
let strokeSize = 20; // default stroke size

let showInstructions = true;

function preload() {
  img = loadImage('blue pen.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  imageMode(CENTER);
  tint(penColor);
  image(img, mouseX, mouseY, 100, 100);

  if (isMousePressed) {
    // draw pen stroke 
    background(200,50);
    strokeWeight(strokeSize);
    stroke(penColor)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (showInstructions) {
    textSize(32);
    textAlign(CENTER);
    text("You can draw in red by pressing the 'r' key,\n yellow by pressing the 'y' key,\n green by pressing the 'g' key,\n and blue (default) by pressing the 'b' key.\n Press any key to start drawing!", width/2, height/2);
  }
}

function keyPressed() {
  showInstructions = false;

  if (key === 'r') {
    penColor = [255, 0, 0]; // red color
  } else if (key === 'y') {
    penColor = [255, 255, 0]; // yellow color
  } else if (key === 'g') {
    penColor = [0, 255, 0]; // green color
  } else if (key === 'b') {
    penColor = [0, 0, 255]; // blue color
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}
