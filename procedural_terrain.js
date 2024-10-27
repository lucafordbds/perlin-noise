let xoff = 100;
function setup() {
  createCanvas(600, 600);
  background(200);
  noLoop();
}

function draw() {
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let noiseVal = noise(x / xoff, y / xoff);
      let terrainColor;
      if (noiseVal < 0.4) {
        terrainColor = color(30, 176, 251);
      } else if (noiseVal < 0.5) {
        terrainColor = color(255, 246, 193);
      } else if (noiseVal < 0.7) {
        terrainColor = color(118, 239, 124);
      } else {
        terrainColor = color(22, 181, 141);
      }
      set(x, y, terrainColor);
    }
  }
  updatePixels();
}
