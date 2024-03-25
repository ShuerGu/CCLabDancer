/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new ElizabethDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ElizabethDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
    this.fillColor = 0;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //petals' color
      this.fillColor += 3;
    if (this.fillColor > 255){
      this.fillColor = 0;
    }
    //scale
    this.s=map(sin(frameCount*0.3), -1, 1, 0.6, 1)
    this.s2=map(sin(frameCount*0.3), -1, 1, 0.8, 1)
    //rotate
    
    this.deg=map(sin(frameCount*0.1), -1, 1, -20, 20)
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    


    push()
      scale(1, this.s)
    
      stroke("green");
      fill("green")
      ellipse(-15, 35, 20, 10);
      ellipse(10, 45, 20, 10);
      strokeWeight(5);
      noFill();
      point(0, 0);
      point(-5, 30);
      point(5 , 60);
      point(0, 90);

      
      beginShape();
      curveVertex(0, 0);
      curveVertex(0, 0);
      curveVertex(-5, 30);
      curveVertex(5 , 60);
      curveVertex(0, 90);
      curveVertex(0, 90);
      endShape();
      scale(1.2);
      stroke(0);
      strokeWeight(1);
    pop()

      scale(this.s2)
      
      fill(this.fillColor, 120, 60);
      rotate(radians(this.deg));
      //head
      circle(0, -50, 20);
      circle(-15, -45, 20);
      circle(-20, -30, 20);
      circle(-15, -15, 20);
      circle(0, -10, 20);
      circle(15, -15, 20);
      circle(20, -30, 20);
      circle(15, -45, 20);
      fill("yellow");
      circle(0, -30, 40)
      fill(0);
      circle(-7, -32, 5);
      circle(7, -32, 5);

      
      
    




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    
    //this.drawReferenceShapes()

    
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    // line(-5, 0, 5, 0);
    // line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/