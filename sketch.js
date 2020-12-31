var car, wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400, 1500));
  deformation=(0.5*weight*speed*speed)/22500;
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="gray";
  car.debug=true;
  car.velocityX=speed;
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="black";
  wall.debug=true;
}
function draw() {
  background(255,255,255);  
  if(isTouching(car, wall)&& deformation<100){
    background(208, 240, 192);
    car.shapeColor="green";
    car.velocityX=0;
    textSize(40);
    fill("green");
    text("Deformation:"+Math.round(deformation), 1000, 300);
    strokeWeight(5);
    stroke(1, 50, 32);
    text("PERFECT", 1000, 100);
  }else if(isTouching(car, wall)&& deformation>=100&& deformation<=180){
    background(255, 255, 153);
    car.shapeColor="yellow";
    car.velocityX=0;
    textSize(40);
    fill("orange");
    text("Deformation:"+Math.round(deformation), 1000, 300);
    strokeWeight(5);
    stroke(255,0,0);
    text("Needs some work",  1000, 100);
  }else if(isTouching(car, wall)&& deformation>180){
    background(255, 127, 127);
    car.shapeColor="red";
    car.velocityX=0;
    textSize(40);
    fill("red");
    text("Deformation:"+Math.round(deformation), 1000, 300);
    strokeWeight(5);
    stroke(0, 0, 0);
    text("DANGER", 1000, 100);
  }
  drawSprites();
}