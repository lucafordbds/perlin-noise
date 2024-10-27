let mainSketch = function (p) {
  let xoff1 = 0;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    canvas.parent("main");
  };

  p.draw = function () {
    p.background(51);
    let x = p.map(p.noise(xoff1), 0, 1, 0, p.width);
    xoff1 += 0.01;

    p.fill(255);
    p.noStroke();
    p.ellipse(x, 200, 24, 24);
  };
};

new p5(mainSketch, "main");
