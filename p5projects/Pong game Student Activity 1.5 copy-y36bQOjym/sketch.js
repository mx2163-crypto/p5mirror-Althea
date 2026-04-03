var playerPaddle;
var computerPaddle;


function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  computerPaddle = new Paddle();
}

function draw() {
  //set background to white
  background("white");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  computerPaddle.xPosition = 0;
  computerPaddle.yPosition = 185;
  
  computerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}