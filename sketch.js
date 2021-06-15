
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var dot;
var bob3,rope3,bob4,bob5,rope4,rope5;
var box,box2,box3,box4
var right,left; 
var bobno=0
var dino=0




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	
    left=createSprite(72,222,40,40);
	right=createSprite(675,221,40,40);
	box1=createSprite(64,89,40,40);
	box2=createSprite(170,89,40,40);
	box3=createSprite(263,89,40,40);
	box4=createSprite(340,89,40,40);
	
	
	
	Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background(230);
  roofObject.display();
  console.log(bobno,"     ",dino)
 textSize(30)
stroke(5)
  fill("blue")
  text("left",102,222)

  stroke(5)
  fill("blue")
  text("right",570,221)

  stroke(5)
  fill("blue")
  text("1",67,60)


  stroke(5)
  fill("blue")
  text("2",169,60)


  stroke(5)
  fill("blue")
  text("3",268,60)


  stroke(5)
  fill("blue")
  text("4",354,60)


if(mousePressedOver(left)){
dino=1
left.shapeColor="red"


}
else{
	left.shapeColor="grey"

}


if(mousePressedOver(right)){
	dino=2
	right.shapeColor="red"
	
	}
	else{
		right.shapeColor="grey"

	}


	if(mousePressedOver(box1)){
		bobno=1
		box1.shapeColor="red"
		
		}
		else{
			box1.shapeColor="grey"

		}

		if(mousePressedOver(box2)){
			bobno=2
			box2.shapeColor="red"
			
			}
			else{
				box2.shapeColor="grey"

			}


			if(mousePressedOver(box3)){
				bobno=3
				box3.shapeColor="red"
				
				}
				else{
					box3.shapeColor="grey"

				}


				if(mousePressedOver(box4)){
					bobno=4
					
					box4.shapeColor="red"	
					}
					else{
						box4.shapeColor="grey"

					}





 
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
if(bob1.body.position.y<314){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:5,y:10})
	
	
	
    
}

if(bob2.body.position.y<314){
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:5,y:10})
}
if(bob3.body.position.y<314 ){
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:5,y:10})
}
if(bob4.body.position.y<314){
Matter.Body.applyForce(bob4.body,bob4.body.position,{x:5,y:10})
}
if(bob5.body.position.y<314){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:5,y:10})
}








  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
drawSprites();

 
}



function keyPressed(){
if(keyCode===UP_ARROW  && bob1.body.position.y>514 && dino===1 && bobno===1  ){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}

if(keyCode===UP_ARROW  && bob5.body.position.y>514 && dino===2 && bobno===1  ){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45})
	}

if(keyCode===UP_ARROW  && bob1.body.position.y>514 && dino===1 && bobno===2  ){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45})
    }
		
if(keyCode===UP_ARROW  && bob5.body.position.y>514 && dino===2 && bobno===2  ){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45})
Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:45})
	}

if(keyCode===UP_ARROW  && bob1.body.position.y>514 && dino===1 && bobno===3  ){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45})
	}
				
if(keyCode===UP_ARROW  && bob5.body.position.y>514 && dino===2 && bobno===3  ){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45})
Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:45})
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:45})
	}
	
if(keyCode===UP_ARROW  && bob1.body.position.y>514 && dino===1 && bobno===4  ){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45})
Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-45})
	}
						
if(keyCode===UP_ARROW  && bob5.body.position.y>514 && dino===2 && bobno===4  ){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45})
Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:45})
Matter.Body.applyForce(bob3.body,bob3.body.position,{x:50,y:45})
Matter.Body.applyForce(bob2.body,bob2.body.position,{x:50,y:45})
	}
	



}









