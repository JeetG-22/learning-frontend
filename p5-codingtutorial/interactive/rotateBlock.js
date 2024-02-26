let distMouse = 10;
let blocks = [];
let col = 50, row = 50;
let size = 10;
let offset = 4;
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    angleMode(DEGREES);
    row = height/size;
    col = width/size;
    for(let i = 0; i < row; i++){
        blocks[i] = [];
        for(let j = 0; j < col; j++){
            blocks[i][j] = new Block(size/2 + i * size, size/2 + j * size);
        }
    }
}

function draw() {
    background(0);
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            blocks[i][j].move();
            blocks[i][j].display();
        }
    }
    print(pmouseX, pmouseY, mouseX, mouseY);

}