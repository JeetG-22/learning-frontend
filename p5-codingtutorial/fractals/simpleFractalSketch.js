let tree = [];
let leaves = [];
const TREELENGTH = 1000;
function setup() {

  //moving the canvas to the center
  var canv = createCanvas(850, 650);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2 + 50;
  canv.position(x, y);


  //creating the trunk of the tree
  let root = createVector(width / 2, height);
  let dir = createVector(0, -1);

  tree.push(new Branch(root, dir, 150));


}

function draw() {
  background(255);

  for (let i = tree.length - 1; i >= 0; i--) {
    tree[i].generateLine()
    tree[i].showLine();

    if (tree[i].finishedBranch()) {
      if (tree.length < 1000) {
        tree.push(tree[i].newBranch(30)); //right
        tree.push(tree[i].newBranch(-30)); //left
      } else { //draw leaf
        console.log("in here")
        leaves.push(new leaf(tree[i].end));
      }
    }
  }

  for(let i = 0; i < leaves.length; i++){
    leaves[i].showLeaf();
  }
  
  // if(0 < leaves.length){

  //   console.log("in here")
  //   noLoop();
  // }



  

}







