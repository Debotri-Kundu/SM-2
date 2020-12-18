var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,30);
	groundSprite.shapeColor=("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6,density:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=new Box(400,height-40,200,20)
	box2=new Box(295,height-80,20,100)
	box3=new Box(505,height-80,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  box1.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
    
  }


else if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-4;
	translation={x:-4,y:0}
	Matter.Body.translate(packageBody,translation)

}
else if (keyCode === RIGHT_ARROW) {
   helicopterSprite.x=helicopterSprite.x+4;
   translation={x:4,y:0}
	Matter.Body.translate(packageBody,translation)
}
}



