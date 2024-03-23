let tree = [];
let leaves = [];
let isLooping = true;
function setup() {

  //moving the canvas to the center
  var canv = createCanvas(windowWidth, windowHeight);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canv.position(x, y);
  canv.style('z-index', -1)


  //creating the trunk of the tree
  let root = createVector(width / 2, height);
  let dir = createVector(0, -3);

  tree.push(new Branch(root, dir, 170));


}

function draw() {
  background(255);

  for (let i = tree.length - 1; i >= 0; i--) {
    tree[i].generateLine()
    tree[i].showLine();

    if (tree[i].finishedBranch()) {
      if (tree[i].originalLength > 15) {
        console.log(tree[i].originalLength);
        tree.push(tree[i].newBranch(random(20, 25))); //right
        tree.push(tree[i].newBranch(random(-20, -25))); //left
      } else { //draw leaf
        leaves.push(new leaf(tree[i].end));
      }
    }
  }

  if (leaves.length == ceil(tree.length / 2)) {
    noLoop();
    isLooping = false;
  }

  if (!isLooping) {
    for (let i = 0; i < leaves.length; i++) {
      leaves[i].showLeaf();
    }
  }





}







