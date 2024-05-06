
let basket = []
let eggNum = 5;


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

//   egg1 = new Egg(random(width), random(height));
//   egg2 = new Egg(random(width), random(height));

  //let newEgg = new Egg(random(width), random(height));

  for(let i = 0; i < eggNum; i++){
    basket.push(new Egg(random(width), random(height)));
  }
  
}

function draw() {
  background(120, 90, 230);
   
   for(let i = 0; i < basket.length; i++){
     basket[i].update();
     basket[i].display();
   }

  textAlign(CENTER);
  text("press to lay eggs", width/2, height/2);
}



class Egg{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.s = random(0.3, 1);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);

    this.showY = true;
    this.randomDraw = random(100);
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width){
      this.speedX = -this.speedX
      this.showY = !this.showY
      // if (this.showY = true){
      //   this.showY = false;
      // }else{
      //   this.showY = true;
      // }
    }
    if (this.y < 0 || this.y > height){
      this.speedY = -this.speedY
      this.showY = !this.showY
    }
  }
  display(){
    push();
    translate(this.x, this.y);
    scale(this.s);
    noStroke();
    fill(255, 200);
    arc(0, 0, 80, 80, 0, PI);
    arc(0, 0, 80, 130, PI, 2*PI);

    if (this.showY == true){
      if(this.randomDraw < 5){
        fill(50, 168, 82);
      }else{
        fill(255, 164, 0);
        circle(0, 0, 40);
      }
    }

    
    pop();
  }
}
function mousePressed(){
  basket.push(new Egg(mouseX, mouseY));
}