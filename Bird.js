class Bird extends BaseClass{
    constructor(x, y) {
     super(x,y,50,50)
     this.i=loadImage("sprites/bird.png")
    };
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      super.display()
    }
  };

  //image(location, x, y, width, height)
  