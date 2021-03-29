var canvas;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
 surface1 = createSprite(40,590,280,50);
 surface1.shapeColor= "blue";

 surface2 = createSprite(290,590,200,50);
 surface2.shapeColor= "red";

 surface3 = createSprite(500,590,200,50);
 surface3.shapeColor= "green";

 surface4 = createSprite(750,590,280,50);
 surface4.shapeColor= "yellow";

//create box sprite and give velocity
box = createSprite(random(20,750),300,50,50);
box.shapeColor="white";
box.velocityY = 5;
box.velocityX = -5;


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
   
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.isTouching(surface1)){
        box.shapeColor="blue";
    }

    if(surface2.isTouching(box)&& box.isTouching(surface2)){
        box.shapeColor="red";
    }

    if(surface3.isTouching(box)&& box.isTouching(surface3)){
        box.shapeColor="green";
    }

    if(surface4.isTouching(box)&& box.isTouching(surface4)){
        box.shapeColor="yellow";
    }

    drawSprites();
}
