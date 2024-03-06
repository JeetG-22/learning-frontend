class Branch {
    constructor(start, velocity, length) {
        this.start = start.copy();
        this.end = start.copy();
        this.velocity = velocity.copy();
        this.length = length;
        this.originalLength = this.length;
        this.growing = true;
    }

    generateLine() {
        if (this.growing) {
            this.end.add(this.velocity);
        }
    }

    showLine() {
        stroke(70, 40, 20);
        strokeWeight(.1 * this.originalLength)
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

    finishedBranch() {
        this.length -= this.velocity.mag();
        if (this.length < 0 && this.growing) { //to make sure a new branch isn't created over an existing drawn branch
            this.growing = false;
            return true;
        } else {
            return false;
        }
    }

    newBranch(angle) {
        let theta = radians(angle);
        theta += this.velocity.heading();
        let magnitude = this.velocity.mag();
        let newVelocity = p5.Vector.fromAngle(theta);
        newVelocity.setMag(magnitude);
        return new Branch(this.end, newVelocity, this.originalLength * random(.75, .82));
    }


}