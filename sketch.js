var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  movingRect = createSprite(210,105,70,70);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(109,231,40,40);
  fixedRect.shapeColor = "green";
}

function draw() {
  
  
  background(255,255,255);
  movingRect.x = World.mouseX;
  
  
  
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }  
  drawSprites();
}