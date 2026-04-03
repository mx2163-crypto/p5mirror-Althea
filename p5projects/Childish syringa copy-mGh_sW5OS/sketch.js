class Coin{
  constructor() {
    this.radius = 0;
    this.xposition = 0;
    this.yposition = 0;
  }
  display() {
    circle(this.xposition, this.yposition, this.radius);
  }
}
  
var smallCoin = new Coin();
var mediumCoin = new Coin();
var largeCoin = new Coin();

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("white");
  smallCoin.xposition = 100;
  smallCoin.yposition = 100;
  smallCoin.radius = 20;
  smallCoin.display();
  
  mediumCoin.xposition = 200;
  mediumCoin.yposition = 200;
  mediumCoin.radius = 60;
  mediumCoin.display();
  
  largeCoin.xposition = 300;
  largeCoin.yposition = 300;
  largeCoin.radius = 100;
  largeCoin.display();
  
}