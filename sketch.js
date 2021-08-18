var r;
var cnavas;


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
canvas.style('z-index',-3);
}

function draw() {
  background(0);
  textSize(23);
  fill(255,255,255,r);
  textFont('Comic Neue');
  text('shh...', mouseX, mouseY);
  r=0;
}

function mouseMoved(){
  r=255;
}