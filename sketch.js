
var background1;
var backgroundImg;

var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    backgroundImg =loadImage ("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    background1 = createSprite(500,400,20,20);
    background1.addImage(backgroundImg);

    //create tom and jerry sprites here
    cat= createSprite(800,600);
    cat.addAnimation("sitting cat", catImg1);
    cat.scale=0.15;
    cat.debug=false;
    cat.setCollider("circle",0,0,300);

    mouse= createSprite(300,600);
    mouse.addAnimation("mouse with cheese", mouseImg1);
    mouse.scale=0.15;
    mouse.debug=false;
    mouse.setCollider("circle",0,0,220);
}

function draw() {
    //Write condition here to evalute if tom and jerry collide

    if(cat.isTouching(mouse)){
        cat.collide(mouse);

        mouse.addAnimation("mouse with glass", mouseImg3);
        mouse.changeAnimation("mouse with glass");

        cat.addAnimation("standing cat", catImg3);
        cat.changeAnimation("standing cat");


    }
    keyPressed ();
    drawSprites();
    textStyle(BOLD);
    textSize(20);
    fill("black");
    text("Press left arrow to make cat walk",180,510);
    text("Press right arrow for animations",180,480);

}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX= -2;
      cat.addAnimation("cat moving", catImg2);
      cat.changeAnimation("cat moving");
  }  
    
  if (keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouse teasing", mouseImg2);
      mouse.changeAnimation("mouse teasing");
      mouse.frameDelay = 15;
  }
 
}
