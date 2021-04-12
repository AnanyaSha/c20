var a,b;

function setup() {
  createCanvas(1200,800);
  a=createSprite(200, 200, 50, 50); //25 = a.width/2
  a.shapeColor= "blue";
  b=createSprite(400, 200,40, 40); // 20 = b.width/2
  b.shapeColor= "lime";
}

function draw() {
  background("yellow");  
  b.x= World.mouseX;
  b.y=World.mouseY;

console.log(a.x-b.x);

if(b.x-a.x< a.width/2+b.width/2 && a.x-b.x < a.width/2+b.width/2 && b.y-a.y < a.height/2+b.width/2 && a.y-b.y < a.height/2+b.width/2){
  a.shapeColor= "red";
  b.shapeColor= "red";
}else{
  b.shapeColor= "lime";
  a.shapeColor= "blue";
}
  drawSprites();
}