var angle = 0;
var slider;
  function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(PI/18, PI/4, PI/4, 0.01);
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
    if(len > 4){
      push();
      rotate(angle);
      branch(len * 0.67);
      pop();
      push();
      rotate(-angle);
      branch(len * 0.67)
      pop();
    }
  }

  

