const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    box3=new Box(700,240,70,70)
    box4=new Box(920,240,70,70)
    box5=new Box(810,160,70,70);
    box6=new Box(200,160,70,70);
   box7=new Box(420,160,70,70);
    box8=new Box(200,340,70,70)
    box9=new Box(420,340,70,70)
   // box10=new box()





    log1=new Log(810,260,300,PI/2)
    log2=new Log(810,180,300,PI/2);
    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7);
    log5=new Log(310,100,300,PI/2)
    log6=new Log(810,260,300,PI/2);
    log7=new Log(760,120,150,PI/7);
    





     pig2=new Pig(810,200);
     pig1=new Pig(810,350);




    
     ground=new Ground(600,height,1200,30);   
    
     Bird1=new Bird(810,220);

}

function draw(){

    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();



    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();



    
    pig2.display();
    pig1.display();


    
    ground.display();

       
    Bird1.display();


}

