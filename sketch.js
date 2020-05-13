const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var ghg;
var points =0;
var b,release=0;
var restart;
var ground;
function preload(){
  bg = loadImage("sprites/bg5.jpg");
  aim = loadImage("aim1.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  arrow1 = new Arrow(200+100,510,PI/2);
  string = new Bow(arrow1.body,{x:200+100,y:436});
 restart = createSprite(500,500,20,40);
    red = new Brick(1000+100,540-100,5,25);
    fill("yellow"); 
    yellowu = new Brick(1000+100,510-100+5,5,30-5); 
    fill("yellow");
    yellowb = new Brick(1000+100,570-100-5,5,30-5);
    fill("blue");
    blueu = new Brick(1000+100,480-100+10,5,30-5);
    fill("blue"); 
    blueb = new Brick(1000+100,600-100-10,5,30-5); 
    fill("black");
    blacku = new Brick(1000+100,630-100-20,5,30-5);
    fill("black");
    blackb = new Brick(1000+100,450-100+20,5,30-5);
    fill('red');
    ground=Bodies.rectangle(0,windowHeight-50,windowWidth,50,{ isStatic: true });
    World.add(engine.world,ground);
}

function draw() {
  background(bg);  
  Engine.update(engine);
 
 image(aim,1050,290,100,300);
    /*
 if(arrow1.body.position.x===1100&&arrow1.body.position.y>510&&arrow1.body.position.y<535){
   Matter.Body.setPosition(arrow1.body,{x:1100,y:515});
   Matter.Body.setStatic(arrow1.body,isStatic);
 }
 if(arrow1.body.position.x===1100&&arrow1.body.position.y>440&&arrow1.body.position.y<465){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:445});
  Matter.Body.setStatic(arrow1.body,isStatic);
}
if(arrow1.body.position.x===1100&&arrow1.body.position.y>415&&arrow1.body.position.y<440){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:420});
  Matter.Body.setStatic(arrow1.body,isStatic);
}
if(arrow1.body.position.x===1100&&arrow1.body.position.y>465&&arrow1.body.position.y<490){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:470});
  Matter.Body.setStatic(arrow1.body,isStatic);
}
if(arrow1.body.position.x===1100&&arrow1.body.position.y>390&&arrow1.body.position.y<415){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:395});
  Matter.Body.setStatic(arrow1.body,isStatic);
}
if(arrow1.body.position.x===1100&&arrow1.body.position.y>490&&arrow1.body.position.y<515){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:495});
  Matter.Body.setStatic(arrow1.body,isStatic);
}
if(arrow1.body.position.x===1100&&arrow1.body.position.y>370&&arrow1.body.position.y<385){
  Matter.Body.setPosition(arrow1.body,{x:1100,y:375});
  Matter.Body.setStatic(arrow1.body,isStatic);
}*/
//box.display();
//b.display();
if(release>=10){
  restart.display();

}
if(mousePressedOver(restart)){
  release=0;
  points=0;
    Matter.Body.setPosition(arrow1.body,{x:1100,y:515});
}

fill("white");

string.display();
arrow1.display();
red.display();
yellowu.display();
yellowb.display();
blueu.display();
blueb.display();
blacku.display();
blackb.display();
textSize(15);
textStyle(ITALIC);
fill("green");
text("50 points",1010+200,545-100);
fill("cream");
text("30 points",1010+200,515-100);
fill("cream");
text("30 points",1010+200,575-100);
fill("red");
text("20 points",1010+200,485-100);
fill("red");
text("20 points",1010+200,605-100);
fill("blue");
text("10 points",1010+200,635-100);
fill("blue");
text("10 points",1010+200,455-100);
fill("green");
textSize(50);
textStyle(ITALIC);
text("HIT THE TARGET",500,100);
textSize(20);
fill(155,10,101);

text("SCORE = "+points,900,200);
fill(0,0,0);
text("NO.OF RELEASES = "+release,600,200);
//ghg.display();
//drawSprites();

}



function mouseDragged(){
  
  Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  string.fly();
}
function keyPressed(){
  if(keyCode === 32){
     
      Matter.Body.setPosition(arrow1.body,{x:300,y:510});
       string.attach(arrow1.body);
       Matter.Body.setAngle(arrow1.body,PI/2);
  }
}