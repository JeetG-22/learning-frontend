function Branch(begin, end){
    this.begin = begin;
    this.end = end;
        

    this.show = function(){
        stroke(0);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.rightBranch = function(){
        //creating a vector with a direction = to parent branch
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/6); //rotates the vector
        dir.mult(random(.75, .8));
        //Creates a new vector 
        let newEnd = p5.Vector.add(this.end, dir);

        return new Branch(this.end, newEnd);


    }

    this.leftBranch = function(){
        //creating a vector with a direction = to parent branch
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI/6); //rotates the vector
        dir.mult(random(.75, .8));
        //Creates a new vector 
        let newEnd = p5.Vector.add(this.end, dir);

        return new Branch(this.end, newEnd);


    }
}