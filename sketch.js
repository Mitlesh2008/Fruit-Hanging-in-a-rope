const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImg,melonImg,bunnyImg;
var bunny;
var button;

function preload(){
backgroundImg = loadImage("background.png");
melonImg = loadImage("melon.png");
bunnyImg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  bunny = createSprite(250,650,100,100);
  bunny.addImage(bunnyImg);
  bunny.scale = 0.2

  button = createImg("cut_button.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
}

function draw() 
{
  background(51);
  image(backgroundImg,width/2,height/2,500,700);
  rope.show();
  image(melonImg,fruit.position.x,fruit.position.y,60,60);
  Engine.update(engine);
  ground.show();

 
   drawSprites();
}

function drop(){
rope.break();
fruit_con.detach();
fruit_con = null;
}