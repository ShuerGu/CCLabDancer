// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 6000; // Decide the initial number of particles.

let particles = [];
let start = true;
let dis = 5;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  // generate particles
  colorMode(HSB, 255, 255, 255, 100);
  
}

function draw() {
  background(230, 90, 30, 20);



  if (start == true){
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
      particles.push (new Particle(random(width), random(250, 350)));
      start = false;
    }
  }

  

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(1, 5);
    this.speedY = random(-1, 1);
    this.speedX = random (-5, 5);
    this.c = color(random(255), 25, 255);
    this.interval = int(random(50, 250));
    this.deg = 10;
    this.dis = 5;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.y+=this.speedY;

    if(frameCount % this.interval == 0){
      this.x += this.speedX;
    }

    if (this.y > 595 || this.y < 5){
      this.speedY = -this.speedY
    }


    this.deg ++;

    if(mouseIsPressed == true){
      if(dist(this.x, this.y, mouseX, mouseY) < 80){
        if(this.x < mouseX ){
          this.x -= this.dis;
        }else if(this.x > mouseX){
          this.x += this.dis;
        }
        if(this.y < mouseY){
          this.y -= this.dis;
        }else if(this.y > mouseY){
          this.y += this.dis;
        }
       }
    }

    
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);

    rotate(radians(this.deg));
    noStroke();
    fill(this.c);
    ellipse(0, 0, this.dia, this.dia/3);
    ellipse(0, 0, this.dia/3, this.dia);

    pop();
  }
}



