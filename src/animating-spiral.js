import { LEDCanvas } from "christmas-client-js";
import { startDrawing } from "#lib/svg.js";

const url = "ws://localhost:9001/ws/018c34b9-2130-7d83-966a-2a93ac5bcd05";
const fps = 25;

async function main() {
  const canvas = new LEDCanvas(url);
  await canvas.connect();

  // Spiral parameters.
  const stepCount = 50;
  const loopCount = 20;
  const loopSpacing = 2;
  const rotationSpeed = 0.2;
  const strokeParams = { width: 5, color: "white" };

  // https://stackoverflow.com/a/12887250/5041327
  let rotation = 0;
  await startDrawing(canvas, fps, (svg, width, height) => {
    rotation += rotationSpeed;

    let stepSize = (2 * Math.PI) / stepCount;
    let endAngle = 2 * Math.PI * loopCount;
    let finished = false;

    const centerX = width / 2;
    const centerY = height / 2;

    let lastX = centerX;
    let lastY = centerY;

    for (let angle = 0; !finished; angle += stepSize) {
      if (angle > endAngle) {
        angle = endAngle;
        finished = true;
      }

      const scalar = loopSpacing * angle;
      const rotatedAngle = angle + rotation;
      const x = centerX + scalar * Math.cos(rotatedAngle);
      const y = centerY + scalar * Math.sin(rotatedAngle);

      svg.line(lastX, lastY, x, y).stroke(strokeParams);

      lastX = x;
      lastY = y;
    }
  });
}

await main();
