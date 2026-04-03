class Block {
 constructor() {
   this.width = 100;
   this.height = 100;
   this.xPosition = 0;
   this.yPosition = 0;
 }
  display() {
   rect(this.xPosition, this.yPosition, this.width, this.height); 
  }
}

var b1, b2, b3, b4;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background("black");
  
  b1 = new Block();
  b1.xPosition = 0;
  b1.yPosition = 0;
  b1.display();
  
  b2 = new Block();
  b2.xPosition = 100;
  b2.yPosition = 100;
  b2.display();
  
  b3 = new Block();
  b3.xPosition = 200;
  b3.yPosition = 200;
  b3.display();
  
  b4 = new Block();
  b4.xPosition = 300;
  b4.yPosition = 300;
  b4.display();
}