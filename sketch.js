
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var ground;
var box1,box2,box3;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,650,800,20) 
	box1 = new Box(650,640,200,20)
	box2 = new Box(750,600,20,100)
	box3 = new Box(550,600,20,100)

	paper1 = new Paper(200,450,40)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 paper1.display();
}



