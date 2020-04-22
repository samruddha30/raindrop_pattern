var rain;

function setup() {
  var canvas = createCanvas(400,400);
}

function draw() {
  background(0);  
  if(frameCount%10===0){
    rain = createSprite(200,0,3,random(10,25));
    rain.shapeColor = "blue";
    rain.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain17 = createSprite(210,0,3,random(10,25));
    rain17.shapeColor = "purple";
    rain17.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain18 = createSprite(220,0,3,random(10,25));
    rain18.shapeColor = "purple";
    rain18.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain19 = createSprite(230,0,3,random(10,25));
    rain19.shapeColor = "purple";
    rain19.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain2 = createSprite(100,0,3,random(10,25));
    rain2.shapeColor = "red";
    rain2.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain3 = createSprite(300,0,3,random(10,25));
    rain3.shapeColor = "white";
    rain3.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain4 = createSprite(390,0,3,random(10,25));
    rain4.shapeColor = "green";
    rain4.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain5 = createSprite(150,0,3,random(10,25));
    rain5.shapeColor = "orange";
    rain5.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain6 = createSprite(10,0,3,random(10,25));
    rain6.shapeColor = "purple";
    rain6.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain7 = createSprite(20,0,3,random(10,25));
    rain7.shapeColor = "violet";
    rain7.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain8 = createSprite(160,0,3,random(10,25));
    rain8.shapeColor = "beige";
    rain8.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain9 = createSprite(150,0,3,random(10,25));
    rain9.shapeColor = "cyan";
    rain9.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain10 = createSprite(40,0,3,random(10,25));
    rain10.shapeColor = "orange";
    rain10.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain11 = createSprite(30,0,3,random(10,25));
    rain11.shapeColor = "green";
    rain11.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain12 = createSprite(235,0,3,random(10,25));
    rain12.shapeColor = "purple";
    rain12.velocityY = random(3,10);
  }
  if(frameCount%10===0){
    rain13 = createSprite(250,0,3,random(10,25));
    rain13.shapeColor = "purple";
    rain13.velocityY = random(3,10);
  }
  if(frameCount%40===0){
    rain14 = createSprite(270,0,3,random(10,25));
    rain14.shapeColor = "purple";
    rain14.velocityY = random(3,10);
  }
  if(frameCount%30===0){
    rain15 = createSprite(240,0,3,random(10,100));
    rain15.shapeColor = "purple";
    rain15.velocityY = random(3,10);
  }
  if(frameCount%20===0){
    rain16 = createSprite(270,0,3,random(10,100));
    rain16.shapeColor = "purple";
    rain16.velocityY = random(3,10);
  }
  drawSprites();
}
