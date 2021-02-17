
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var sling;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(300,450,10);
	sling = new Sling(stone,{x: 300, y: 450});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  
	stone.display();
  treeObj.display();
  mango1.display();
  sling.display()

  groundObject.display();
}

function mouseReleased() {
	sling.shoot();
}
