let terrainSketch = function (p) {
  let xoff = 100;
  let canvasSize = 600;
  let resolution = 10;

  p.setup = function () {
    let terrainCanvas = p.createCanvas(canvasSize, canvasSize);
    terrainCanvas.parent("terrainCanvas");
    p.noLoop();
    generateTerrain();
  };

  generateTerrain = function () {
    // Actualizar valores basados en los inputs del usuario
    resolution = parseInt(document.getElementById("resolution").value);
    xoff = parseInt(document.getElementById("scale").value);
    canvasSize = parseInt(document.getElementById("canvasSize").value);
    p.resizeCanvas(canvasSize, canvasSize);
    p.background(200);

    // Obtener los colores seleccionados por el usuario
    let waterColor = document.getElementById("waterColor").value;
    let sandColor = document.getElementById("sandColor").value;
    let grassColor = document.getElementById("grassColor").value;
    let forestColor = document.getElementById("forestColor").value;

    for (let x = 0; x < p.width; x += resolution) {
      for (let y = 0; y < p.height; y += resolution) {
        let noiseVal = p.noise(x / xoff, y / xoff);
        let terrainColor;
        if (noiseVal < 0.4) {
          terrainColor = p.color(waterColor); // Agua
        } else if (noiseVal < 0.5) {
          terrainColor = p.color(sandColor); // Playa
        } else if (noiseVal < 0.7) {
          terrainColor = p.color(grassColor); // Pasto
        } else {
          terrainColor = p.color(forestColor); // Bosque
        }
        p.fill(terrainColor);
        p.noStroke();
        p.rect(x, y, resolution, resolution);
      }
    }
  };
};

new p5(terrainSketch, "terrainCanvas");
