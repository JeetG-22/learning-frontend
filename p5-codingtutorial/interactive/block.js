class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 70;
    }

    display() {

        noFill();
        stroke(this.c);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(0, 0, size - offset, size - offset)
        pop();
    }

    move() {
        let distance;
        //if mouse is moving check distance between mouse loc and center of square
        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
            if (distance < distMouse) {
                this.angle++;
                this.c = 255;
            }
        }

        //if squares are rotating. bring the orientation back to 90s
        if (this.angle > 0 && this.angle < 90) {
            this.angle+=1;
            this.c -= 3;
        } else {
            this.angle = 0;
            this.c = 70;
        }

    }
}