var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 =createSprite(170,150,50,50);
  obj2 =createSprite(240,150,50,50);
  obj3 =createSprite(400,150,50,50);
  obj4 =createSprite(360,150,50,50);
  movingRect.velocityY = -5;
  obj3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,obj3);
  drawSprites();
}

