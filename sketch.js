const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject;
var world;

// var Launcher;

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    paperObject=new paper(10,450,70)
	dustbinObj=new dustbin(800,650);
	Launcher = new Launcher(paperObject.body, {x:50, y:500});
	groundObject=new ground(width/2,670,width,20);

}

function draw() {
  rectMode(CENTER);
  background("#eee");

	Engine.update(engine);
  strokeWeight(4);
 paperObject.display();
	Launcher.display();
  dustbinObj.display();
  groundObject.display();
}

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y: mouseY});
}

function mouseReleased() {
	Launcher.fly();
}
