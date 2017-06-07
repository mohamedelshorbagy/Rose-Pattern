
/*
    # CREATED BY : Mohamed Elshorbagy
    # Date : 07/06/2017 
    # Maths Rose Patterns
    
 */

/* Global Variables */ 


var k;
var n;
var d;

function setup() {
createCanvas(400,400);
/*

    Sliders To Control the Values of N and D 
   ===> Where K = N / D

 */


n = createSlider(1 , 7 , 4 , 1);
d = createSlider(1 , 9 , 9 , 1);




}


function draw() {
background(51);

/* Trnaslate to Make the Origin in the Center Of the Page  */
translate(width /2 , height/2);



/* Set the Value of the K to Equals =  N / D */ 

k = n.value() / d.value();
 /* Drawing the Rose Patterns */
 /* 
    Note : 
        We Multiply the TWO_PI By he Value of the D Because it's the demo. of the Formula of the K 
        That will Optimize the Iteration of the For loop and not makin it for Just a random Value
 */ 

/* 
    beginShape() , endShape() ==> Functions will concatinating all the points instead of making roses just points not connected to each other
*/ 



beginShape();
for(var i = 0;i < TWO_PI * (d.value());i += 0.02) {
    var r = 200 *  cos(k * i); // 200 ==> IS Scalling Factor instead of using Map Function 
    var x = r * cos(i);
    var y = r * sin(i);

    stroke(255);
    strokeWeight(1);
    noFill();
    vertex(x , y);



} 
endShape();


}




