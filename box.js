class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if (this.body.speed < 3){
          push()
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop()
        }
       
        else {
          push()
          World.remove (world,this.body)
          this.visibility = this.visibility - 0.5
          tint(255, this.visibility)
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop()
        }
      }
}