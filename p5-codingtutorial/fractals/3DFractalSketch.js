function setup() {
    let canv = createCanvas(500, 500, WEBGL);
    angleMode(DEGREES);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canv.position(x,y)

    // noLoop();
}

function draw() {
    background(255);
    translate(0, 200, 0);
    rotateY(frameCount);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, 0, -len, 0);
    translate(0, -len, 0);
    stroke(70,40,20);
    strokeWeight(len * .05);

    if (len > 10) {
        for (let i = 0; i < 3; i++) {
            rotateY(120);
            push();
            rotateZ(30);
            branch(len * .7);
            pop();
        }
    } else {
        let r = 255 + random(-20, 20);
        let g = 180 + random(-20, 20);
        let b = 190 + random(-20, 20);
        fill(r,g,b, 100);
        noStroke();
        ellipse(0,0, 10)
    }

}