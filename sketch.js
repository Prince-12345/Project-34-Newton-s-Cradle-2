
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgcolor;




function setup() {

createCanvas(windowWidth-400, windowHeight-100);

bgcolor = color(random(100,200),random(100,200),random(100,200));

engine = Engine.create();
world = engine.world;

stand = new StandClass(width/2,70,width,30);

bob1 = new BobClass(320,350,color(random(0,100),random(0,100),random(0,100)));
bob2 = new BobClass(380,350,color(random(0,100),random(0,100),random(0,100)));
bob3 = new BobClass(440,350,color(random(0,100),random(0,100),random(0,100)));
bob4 = new BobClass(500,350,color(random(0,100),random(0,100),random(0,100)));
bob5 = new BobClass(560,350,color(random(0,100),random(0,100),random(0,100)));

joint=new JoinClass(bob1.body,{x:320,y:70});
joint2=new JoinClass(bob2.body,{x:380,y:70});
joint3=new JoinClass(bob3.body,{x:440,y:70});
joint4=new JoinClass(bob4.body,{x:500,y:70});
joint5=new JoinClass(bob5.body,{x:560,y:70});

Engine.run(engine);

}






function draw() {

background(bgcolor);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

stand.display();

joint.display();
joint2.display();
joint3.display();
joint4.display();
joint5.display();

}






function keyPressed(){

if(keyCode === 49){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});
}

if(keyCode === 50){
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});    
}

if(keyCode === 51){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob3.body,bob1.body.position,{x:-0.07,y:0});    
}

if(keyCode === 52){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob3.body,bob1.body.position,{x:-0.07,y:0});    
Matter.Body.applyForce(bob4.body,bob1.body.position,{x:-0.07,y:0});
}

if(keyCode === 53){
Matter.Body.applyForce(bob5.body,bob1.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob3.body,bob1.body.position,{x:0.07,y:0});    
Matter.Body.applyForce(bob4.body,bob1.body.position,{x:0.07,y:0});
}

if(keyCode === 54){
Matter.Body.applyForce(bob4.body,bob1.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob5.body,bob2.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob3.body,bob1.body.position,{x:0.07,y:0});    
}

if(keyCode === 55){
Matter.Body.applyForce(bob4.body,bob2.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob5.body,bob1.body.position,{x:0.07,y:0});    
}

if(keyCode === 56){
Matter.Body.applyForce(bob5.body,bob1.body.position,{x:0.07,y:0});
}

if(keyCode === 57){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob5.body,bob1.body.position,{x:0.07,y:0});
}

if(keyCode === 48){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob5.body,bob1.body.position,{x:0.07,y:0});
Matter.Body.applyForce(bob2.body,bob1.body.position,{x:-0.07,y:0});
Matter.Body.applyForce(bob4.body,bob1.body.position,{x:0.07,y:0});
}

}
