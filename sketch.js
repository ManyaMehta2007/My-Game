var cap, copRunning, copStanding;
var robber, robberRunning, robberStanding;
var house, houseImage;



function preload() {
  copRunning = loadAnimation("images/cop1.png", "images/cop2.png", "images/cop3.png", "images/cop4.png");
  copStanding = loadImage("images/cop1.png");

  robberRunning = loadAnimation("images/robber1.png", "images/robber2.png", 
     "images/robber3.png", "images/robber4.png");
  robberStanding = loadImage("images/robberStanding.png")

  houseImage = loadImage("images/house.jpg");

}

function setup() {
  createCanvas(1275,500);
  cop = createSprite(100,160);
  cop.addAnimation("cop", copImage);
  cop.scale = 0.4;

  robber = createSprite(100,420);
  robber.addAnimation("robber", robberImage);
}

function draw() {
  background(houseImage);  

  if(keyDown("right")){
    robber.x = robber.x + 5;
  }















  drawSprites();
}