let movingGraphSketch = function (p) {
  let inc = 0.01;
  let start = 0;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("movingGraph");
  };

  p.draw = function () {
    p.background(51);
    p.stroke(255);
    p.noFill();
    p.beginShape();
    let xoff = start;
    for (let x = 0; x < p.width; x++) {
      let y = p.map(p.noise(xoff), 0, 1, 0, p.height);
      p.vertex(x, y);
      xoff += inc;
    }
    p.endShape(p.CLOSE);
    start += inc;
  };
};

new p5(movingGraphSketch, "movingGraph");
