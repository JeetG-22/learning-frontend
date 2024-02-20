let angle = 0;
function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(50);
    let distance = dist(mouseX, mouseY, width/2, height/2)
    translate(width/2, height/2)
    rotate(angle);
    rect(0, 0, 100, 50);
    angle+=1;
}