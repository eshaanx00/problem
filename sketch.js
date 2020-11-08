
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
  boy=loadImage("boy.png")
  treee=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone=new Stone(200,200)
    mango1=new Mango(900,400)
    mango2=new Mango(1000,400);
    mango3=new Mango(1100,400)
    mango4=new Mango(1000,300)
    mango5=new Mango(1070,300)

   chain=new Chain(stone.body,{x:200,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,300,200,400)
  image(treee,800,50,400,800)
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectcollison(mango1,stone);
  detectcollison(mango2,stone);
  detectcollison(mango3,stone);
  detectcollison(mango4,stone);
  detectcollison(mango5,stone);
  chain.display();
  drawSprites();
 
}
function detectcollison(lmango,lstone){
mango=lmango.body.position
stone=lstone.body.position

var distance=dist(stone.x,stone.y,mango.x,mango.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.isStatic(lmago.body,false);
}
}



