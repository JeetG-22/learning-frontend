function setup() {
    const canv = createCanvas(850, 650)
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 50;
    canv.position(x,y)
    angleMode(DEGREES);
    noLoop();
}

function draw() {
    background(255);
    //initial translation to move the drunk to the bottom center
    translate(width / 2, height);
    branch(150);
}

function branch(len) {
    stroke(70,40,20);
    strokeWeight(.1* len);
    push();
    if (len > 10) {
        //creates the initial trunk
        line(0, 0, 0, -len);
        //moves the new center point to the tip of the branch
        translate(0, -len);
        //rotates to the right
        rotate(30);
        //creates the right branch
        branch(len * random(.75, .8));

        //rotates to the left
        rotate(-60);

        //creates the left branch
        branch(len * random(.75, .8));

    } else { //creating leaves
        let r = 80 + random(-20, 20);
        let g = 140 + random(-20, 20);
        let b = 40 + random(-20, 20);
        fill(r,g,b, 100);
        noStroke();
        ellipse(0,0, 10)
    }
    pop();

}