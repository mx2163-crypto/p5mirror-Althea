var b1,b2,b3,b4,b5,b6,b7,b8;

function setup() {
  createCanvas(400, 400);
  b1=new Building()
  b1.position=1;
  b1.floors=20;
  
  b2=new Building()
  b2.position=2;
  b2.floors=26;

  b3=new Building()
  b3.position=3;
  b3.floors=33;

  b4=new Building()
  b4.position=4;
  b4.floors=23;

  b5=new Building()
  b5.position=7;
  b5.floors=17;

  b6=new Building()
  b6.position=8;
  b6.floors=25;

  b7=new Building()
  b7.position=9;
  b7.floors=36;
  
  //garden
  b8=new Building()
  b8.floors=1
  b8.position = 5;    
  b8.yPosition = 380;
  b8.width = 70;

}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  
  //garden
  b8.display();
}
