let twoDimensionalSketch = function (p) {
  let xoff1 = 0;
  let xoff2 = 1000;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("twoDimensional");
  };

  p.draw = function () {
    p.background(51);
    let x = p.map(p.noise(xoff1), 0, 1, 0, p.width);
    let y = p.map(p.noise(xoff2), 0, 1, 0, p.height);
    xoff1 += 0.01;
    xoff2 += 0.01;

    p.fill(255);
    p.noStroke();
    p.ellipse(x, y, 24, 24);
  };
};

new p5(twoDimensionalSketch, "twoDimensional");
