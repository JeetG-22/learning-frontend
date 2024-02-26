var angle = 0;
var slider;
  function setup() {
    var canv = createCanvas(700, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 + 50;
    canv.position(x,y)
    slider = createSlider(PI/18, PI/4, PI/4, 0.01);
    slider.position(x + width/2 - 40, y + height)
  }
  
  function draw() {
    background(50);
    stroke(255);

    angle = slider.value();
    translate(width/2, height);
    branch(200);

  }

  function branch(len){
    line(0,0,0,-len);
    translate(0,-len);
    if(len > 5){
      push();
      rotate(angle);
      branch(len * 0.7);
      pop();
      push();
      rotate(-angle);
      branch(len * 0.67)
      pop();
    }
  }

  

