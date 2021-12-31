function preload(){
}

function setup(){
canvas= createCanvas(500, 400);
canvas.position(119,299);
video=createCapture(VIDEO);
video.hide()

tint_color="";
}

function draw(){
image(video,0,0,500,400);  
tint(tint_color);
noStroke();
fill(204,84,36);
circle(201, 350, 20);
ellipse(300, 100, 55, 55);
rect(100, 200, 55, 55);
}
function filtering(){
tint_color=document.getElementById("colors").value;  
}
