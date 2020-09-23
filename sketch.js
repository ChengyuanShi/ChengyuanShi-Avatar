'use strict'
let x = 10;
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
let bubble7;
let bubble8;
let bubble9;
let bubble10;
let bubbl1;
let bubbl2;
let bubbl3;
let bubbl4;
let bubbl5;
let bubbl6;
let bubbl7;
let bubbl8;
let bubbl9;
let bubbl10;
let angleWag;
var mic;
var img2;

function preload(){
 img2 = loadImage("fly1.gif"); }

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
   noCursor();
  
  mic = new p5.AudioIn();
  mic.start();
  
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();
  bubble5 = new Bubble();
  bubble6 = new Bubble();
  bubble7 = new Bubble();
  bubble8 = new Bubble();
  bubble9 = new Bubble();
  bubble10 = new Bubble();
  
  
  bubbl1 = new Bubbl();
  bubbl2 = new Bubbl();
  bubbl3 = new Bubbl();
  bubbl4 = new Bubbl();
  bubbl5 = new Bubbl();
  bubbl6 = new Bubbl();
  bubbl7 = new Bubbl();
  bubbl8 = new Bubbl();
  bubbl9 = new Bubbl();
  bubbl10 = new Bubbl();
}






function draw() {
   push();
  var vol = mic.getLevel();
  console.log(vol);
  pop();

  angleWag = mouseX;

  background(20);
  fill(999);

    push();
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
    bubble5.move();
  bubble5.show();

  pop();
  
      push();
  bubbl1.move();
  bubbl1.show();
  bubbl2.move();
  bubbl2.show();
  bubbl3.move();
  bubbl3.show();
  bubbl4.move();
  bubbl4.show();
    bubbl5.move();
  bubbl5.show();

  pop();

  fill(150, 100, 100);
  circle(200, 450, 320);
  fill(200, 100, 100);
  circle(200, 180, 250);

  fill(50);
  
  

if (mouseX > 170 && mouseX <230 && mouseY > 170 && mouseY < 230){
  drawMouse2();
  drawEyebrow2();
  drawNose2();
  
  
  
}
 else{
   drawMouse();
   drawEyebrow();
   drawNose();
   
 }
  
  drawEyes();
  

  drawTie(angleWag); // parameter = angle rotation
  push();
  strokeWeight(20);
  fill(999);
   let x1 = map(mouseX, 0, width, 115, 155, true);
  let x2 = map(mouseX, 0, width, 243, 285, true);
  let y1 = map(mouseY, 0, height, 100, 143, true);
  
  ellipse(x1, y1 +57, vol*500, vol*500);
    ellipse(x2, y1 +57, vol*500, vol*500);
 pop();
   push();  
  bubble6.move();
  bubble6.show();
  bubble7.move();
  bubble7.show();
  bubble8.move();
  bubble8.show();
  bubble9.move();
  bubble9.show();
    bubble10.move();
  bubble10.show();
 pop();
     push();  
  bubbl6.move();
  bubbl6.show();
  bubbl7.move();
  bubbl7.show();
  bubbl8.move();
  bubbl8.show();
  bubbl9.move();
  bubbl9.show();
    bubbl10.move();
  bubbl10.show();
 pop();
 image(img2, mouseX,mouseY);

}





function drawMouse2() {
  beginShape();
  fill(150, 100, 100);
  vertex(width * .54, height * .80);
  vertex(width * .46, height * .80);
  vertex(width * .49, height * .60);
  vertex(width * .51, height * .60);
  endShape(CLOSE);
}

function drawEyebrow2() {
  push();
  rotate(10);
  beginShape();
  vertex(width * .40, height * .20);
  vertex(width * .20, height * .20);
  vertex(width * .20, height * .30);
  vertex(width * .40, height * .25);
  endShape(CLOSE);
  pop();

  push();
  rotate(-5);

  beginShape();
  vertex(width * .80, height * .20);
  vertex(width * .60, height * .20);
  vertex(width * .60, height * .25);
  vertex(width * .80, height * .30);
  endShape(CLOSE);
  pop();

  push();

  beginShape();
  vertex(width * .10, height * .20);
  vertex(width * .10, height * .20);
  vertex(width * .10, height * .30);
  vertex(width * .10, height * .30);
  endShape(CLOSE);
  pop();
  push();

  beginShape();
  vertex(width * .10, height * .35);
  vertex(width * .10, height * .35);
  vertex(width * .10, height * .35);
  vertex(width * .10, height * .35);
  endShape(CLOSE);
  pop();


}


function drawEyebrow() {
  push();
  rotate(0);
  beginShape();
  vertex(width * .40, height * .20);
  vertex(width * .20, height * .20);
  vertex(width * .20, height * .30);
  vertex(width * .40, height * .25);
  endShape(CLOSE);
  pop();

  push();

  beginShape();
  vertex(width * .80, height * .20);
  vertex(width * .60, height * .20);
  vertex(width * .60, height * .25);
  vertex(width * .80, height * .30);
  endShape(CLOSE);
  pop();
}


function drawMouse() {
  beginShape();
  fill(150, 100, 100);
  vertex(width * .54, height * .68);
  vertex(width * .46, height * .68);
  vertex(width * .49, height * .60);
  vertex(width * .51, height * .60);
  endShape(CLOSE);
}

function drawNose() {

  fill(550, 100, 100);
  circle(200, 220, 50);
  fill(999);
  circle(190, 210, 13);
}

function drawNose2() {

  fill(50);
  circle(200, 220, 50);
  fill(999);
  circle(190, 210, 13);
}
function drawEyes() {
  fill(50);
  stroke(255);
  strokeWeight(8);

  circle(130, 180, 70);
  circle(270, 180, 70);
}

function drawTie() {
  beginShape();

  fill(550, 100, 100);
  vertex(width * .40, height * .85);
  vertex(width * .40, height * .75);

  vertex(width * .60, height * .85);
  vertex(width * .60, height * .75);

  endShape(CLOSE);
  beginShape();
        fill(550, 100, 100);
  circle(200, 320, 20);
endShape(CLOSE);

}
class Bubble {
constructor() {
  this.x = 400;
  this.y = 400;
}
  move(){
    this.x = this.x+ random(-11, 10);
    this.y = this.y+ random(-11, 10);
    
  }
  
  show(){
    stroke(990);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 40, 40);}
    
}
class Bubbl {
constructor() {
  this.x = 0;
  this.y = 400;
}
  move(){
    this.x = this.x+ random(-10 , 11);
    this.y = this.y+ random(-11 , 10);
    
  }
  
  show(){
    stroke(990);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 40, 40);}
    
}