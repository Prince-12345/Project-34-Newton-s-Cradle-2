class JoinClass{
constructor(bodyA, pointB){
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 1,
length: 220,
angularStiffness:1
}
this.pointB = pointB;
this.pointX = bodyA.x;
this.pointY = bodyA.y - 250;
this.join = Constraint.create(options);
World.add(world, this.join);

}

display(){
if(this.join.bodyA){
var pointA = this.join.bodyA.position;
var pointB = this.pointB;
push();
stroke("#fff")
line(pointB.x, pointB.y, pointA.x, pointA.y);
pop(); 
}
}      
}