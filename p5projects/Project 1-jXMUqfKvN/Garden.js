//garden
class Building{
  constructor() 
  {
    b8.height = 10;
    b8.xPosition = 0;    
    b8.yPosition = 0;
    b8.width = 75;
    
  }  
    display() {
      b8(this.xPosition, this.yPosition, this.width, this.height);
    }
}

var b8;
  