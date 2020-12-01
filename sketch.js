var wall;
var car;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1560, 200, 50, height/2);
  wall.shapeColor = "black"

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(40, 200, 30, 30);
  car.shapeColor = "white";
}

function draw() {
  background("grey"); 
  car.velocityX = speed;
  wall.depth = car.depth;
  wall.depth = wall.depth+1;
  if(car.isTouching(wall)){
    var deformation = 0.5*speed*speed*weight/22500;
 

      car.velocityX = 0;

    if(deformation<100){
      car.shapeColor = "green";
      textSize(30)
      fill("green");
      text("Good (green)", 800, 200)
    }

    if(deformation>100 && deformation<180){                                                           
      car.shapeColor = "blue";
      textSize(30)
      fill("blue");
      text("Average (blue)", 800, 200)
    }

    if(deformation>180){
      car.shapeColor = "red";
      textSize(30)
      fill("red"); 
      text("Lethal (red)",800,200);
  }
  }
  drawSprites();
        

}