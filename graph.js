let graphSketch = function (p) {
  let inc = 0.01;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("graph");
  };

  p.draw = function () {
    p.background(51);
    p.stroke(255);
    p.noFill();
    p.beginShape();
    let xoff = inc;
    for (let x = 0; x < p.width; x++) {
      let y = p.map(p.noise(xoff), 0, 1, 0, p.height);
      p.vertex(x, y);
      xoff += inc;
    }
    p.endShape(p.CLOSE);
  };
};

new p5(graphSketch, "graph");
