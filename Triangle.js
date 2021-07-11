class Triangle {
    constructor(x, y) {
      var options = {
        'density':2,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 70, 20, options);
      this.width = 70;
      this.height = 20;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('green')
      rectMode(LEFT)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  