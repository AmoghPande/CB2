
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(800,680,1600,20);
	paper = new Paper(200,450,20);
	dustbin = new Dustbin(1200,650);


	Engine.run(engine);
  
}

function draw() {
  background(255);

  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode==UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
	}
}