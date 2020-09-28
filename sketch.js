var object1, object2;

function setup() {
  createCanvas(1200,800);
  
  object1=createSprite(200, 10, 50, 80);
  object1.shapeColor="blue";

  object2=createSprite(200, 800, 50, 80);
  object2.shapeColor="blue";
  
  object1.velocityY= 10;
  object2.velocityY= -10;
}

function draw() {
  background(0,0,0); 
   bounceOff(object1,object2);
  drawSprites();
}
function bounceOff(obj1, obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if(obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 +obj1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);

  }
}