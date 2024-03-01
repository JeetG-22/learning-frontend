  let tree = [];
  function setup() {
    var canv = createCanvas(500, 500);
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2 + 50;
    canv.position(x,y)

    let a = createVector(width/2, height);
    let b = createVector(width/2, height - 100);

    tree[0] = new Branch(a,b);
    tree[1] = tree[0].rightBranch();
    tree[2] = tree[0].leftBranch();


  }
  
  function draw() {
    background(255);
    for(let i = 0; i < tree.length; i++){
      tree[i].show();
    }
  }




  

