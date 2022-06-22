var pathImg;
var path;
var runner
var runnerImg 
var invisiblewallleft
var invisiblewallright

function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
 //runnerImg=loadImage("Runner-1.png")
 runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
}
function setup(){
createCanvas(400,400)

path=createSprite(200,200)
path.addImage(pathImg)


runner=createSprite(200,360,10,10)
runner.addAnimation("running",runnerImg)
runner.scale=0.1

invisiblewallleft=createSprite(50,200,100,600)
invisiblewallright=createSprite(350,200,100,600)
  //create sprites here

//path.velocityY=4
//path.scale=1.2

//runner=createSprite(200,200)

invisiblewallleft.visible=false
invisiblewallright.visible=false

}

function draw() {

  background(0);
  drawSprites()

  path.velocityY=4
  runner.x=mouseX
  //mousex.runner
  if(path.y>400){
    path.y=height/2;
  }

  runner.collide(invisiblewallleft)
  runner.collide(invisiblewallright)
//infinite ground
}
