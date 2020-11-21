
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create()
	world =  engine.world
	wall1 = createSprite(450,610,20,100);
	wall2Sprite = createSprite(400,650,100,20);
	wall3 = createSprite(350,610,20,100);
	wall2 = Bodies.rectangle(400,650,100,20,{isStatic:true} );

	paper = new paperClass(200,650,40)


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	//Create the Bodies Here.
	World.add(world, wall2)
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

