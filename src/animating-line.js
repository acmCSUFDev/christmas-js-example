import { LEDCanvas } from "christmas-client-js";
import { startDrawing } from "#lib/svg.js";

const url =
  "wss://blinktest.acmcsuf.com/ws/018c347d-0c0e-7577-b861-0e3f1b956daa";
const fps = 15;

async function main() {
  const canvas = new LEDCanvas(url);
  await canvas.connect();

  let y = 0;
  await startDrawing(canvas, fps, (svg, width, height) => {
    // Move the line down by one pixel each frame.
    y = (y + 1) % height;

    svg.rect(width, height).fill("red");
    svg.line(0, y, width, y).stroke({ width: 10, color: "blue" });
  });
}

await main();
