var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var b1,b1k,b2,b2k,b3,b3k;

var b1B, b2B, b3B;

var house,housebk;

var packageBody,ground,groundbk;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

	b1k = loadImage("rockBlock.png")
	b2k = loadImage("rockBlock.png")
	b3k = loadImage("rockBlock.png")

	groundbk = loadImage("rockGround.png");

	housebk = loadImage("house.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	groundSprite.addImage(groundbk);
	groundSprite.scale = 1;

	house = createSprite(675,540,100,100);
	house.addImage(housebk);

	b1 = createSprite(width/2 + 40,350,100,30);
	b1.addImage(b1k)
	b1.scale = 0.15

	b2 = createSprite(width/2 - 75,450,100,30);
	b2.addImage(b2k)
	b2.scale = 0.15


	b3 = createSprite(width/2 + 40,550,100,30);
	b3.addImage(b3k)
	b3.scale = 0.15

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	






	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 1, 	isStatic : true
	} );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	b1B = Bodies.rectangle(width/2 + 40, 350, 100, 30 , {isStatic:true} );
	World.add(world, b1B);
	 
	b2B = Bodies.rectangle(width/2 - 75, 450, 100, 30 , {isStatic:true} );
	World.add(world, b2B);
	 
	b3B = Bodies.rectangle(width/2 + 40, 550, 100, 30 , {isStatic:true} );
 	World.add(world, b3B);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  helicopterSprite.velocityX = 5;

  if(helicopterSprite.x > 400){
	helicopterSprite.velocityX = 0;
  }

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	keyPressed()

  


  drawSprites();


 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.visible = true;
	Matter.Body.setStatic(packageBody, false);

	helicopterSprite.velocityX = 5;

	if(helicopterSprite.x > 800){
		helicopterSprite.distroy;
	}

	  
  }
}





