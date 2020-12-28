class StandClass{

constructor(x,y,width,height){

var options = {
'isStatic':true,
'restitution':0.8,
'density':1,
'friction':1
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}

display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
fill(250,100,120)
stroke(70);
strokeWeight(4)
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0, this.width, this.height);
pop();
}

}