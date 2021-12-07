var fixedRect, movingRect; 
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green";

  //fixedRect.debug = true; 
  //movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "orange";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "blue";

  gameObject3.velocityX = 5; 
  gameObject3.velocityX = -5; 

}

function draw() {
  background(0); 
  
  movingRect.x = World.mouseX; 
  movingRect.x = World.mouseY; 

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red"; 
    gameObject1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green"; 
    gameObject1.shapeColor = "green";
  }

  bounceOff(gameObject3,gameObject4);

  drawSprites();

}


