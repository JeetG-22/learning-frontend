class leaf {
    constructor(end) {
        this.end = end.copy();
    }

    showLeaf() {
        noStroke();
        let r = 255 + random(-20, 20);
        let g = 165 + random(-20, 20);
        let b = 0 + random(-20, 20);
        fill(r, g, b, 200);

        angleMode(DEGREES);
        ellipseMode(CORNER)
        push();
        translate(this.end.x, this.end.y);
        rotate(random(0, 360))
        ellipse(-5, -5, 8, 20);
        rotate(random(0, 360))
        ellipse(-5, -5, 8, 20);
        pop();
    }

    fall() {
        while (this.position.y < height) {
            this.position.y += 1;
        }

    }

}