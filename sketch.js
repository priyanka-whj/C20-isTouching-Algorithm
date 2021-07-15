
var fixedRect, fixedRect1, movingRect;

function setup() 
{
  createCanvas(800,400);

  fixedRect = createSprite(300, 200, 90, 70);
  fixedRect.shapeColor = "green";

  fixedRect1 = createSprite(100, 320, 50, 50);
  fixedRect1.shapeColor = "green";

  movingRect = createSprite(600, 80, 50, 80);
  movingRect.shapeColor = "green";
}

function draw() 
{
  background("white"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(fixedRect, movingRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(isTouching(fixedRect1, movingRect))
        {
          fixedRect1.shapeColor = "red";
          movingRect.shapeColor = "red";
        }
        else
        {
          fixedRect.shapeColor = "green";
          fixedRect1.shapeColor = "green";
          movingRect.shapeColor = "green";
        }

  drawSprites();
}













