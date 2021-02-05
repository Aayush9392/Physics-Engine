const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,object;
function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var ground_options = 
  {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  var object_options = 
  {
    restitution:0.7
  }
  object = Bodies.circle(200,100,20,object_options);
  World.add(world,object);
}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(object.position.x,object.position.y,20,20);
  drawSprites();
}