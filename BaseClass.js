class BaseClass{
    constructor(x, y, width, height, angle) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.w = width
      this.h =height;
      World.add(world, this.body);
      this.i = loadImage("sprites/base.png")
    };
    display(){
       
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.i, 0, 0, this.w, this.h);
      pop();
    };
  };

  //image(location, x, y, width, height)
  