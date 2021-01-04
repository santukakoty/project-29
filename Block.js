class Block{
  constructor(x,y)
{
   var options={
       isStatic:false,
       restitution: 0.4,
       //friction: 1,
   }
   this.width=40;
   this.height=30

   this.body=Bodies.rectangle(x,y, 40,30,options);
   World.add(world,this.body);
};
display()
{
  // var angle = this.body.angle;
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rectMode(CENTER);
   //rotate(angle);
   rect(0,0,this.height,this.width);
   pop();
}
}

    