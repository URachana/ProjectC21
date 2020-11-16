var bullet, wall;
var speed, weight;
var deformation, thickness;

function setup() {
  thickness =random(22,83);
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);
  bullet = createSprite(100,200,20,40);
  bullet.shapeColor= "white";

  speed = random(223,321);
  weight = random (30,52);

  bullet.velocityX = speed;

}

function draw() {
  background(0);  

  collision(bullet,wall);

  deformation= ((0.5*weight*bullet.velocityX*bullet.velocityX)/(Math.pow(thickness,3)));


  if (deformation < 10 ){
    bullet.shapeColor= "green";
     } 
  else if ( deformation > 10){
    bullet.shapeColor = "red";
     } 
  

  drawSprites();
}