var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  background(0)
  speed=random(223,321)
  weight=random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, thickness, height/2);
  bullet.velocityX = speed

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
    var deformation = 0.5 * weight * speed * speed/22500
    if(deformation<10){
      bullet.shapecolor = color(255,0,0);
    }
    if(deformation>10){
      bullet.shapecolor = color(0,255,0);
    }
  }
}