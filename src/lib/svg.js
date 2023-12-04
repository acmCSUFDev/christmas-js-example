import { Resvg } from "@resvg/resvg-js";
import { Image } from "image-js";
import * as svgjs from "@svgdotjs/svg.js";
import * as svgdom from "svgdom";

/**
 * @param {LEDCanvas} canvas
 * @param {number} fps
 * @param {(svg: svgjs.Svg, width: number, height: number) => void} drawFunc
 * @returns {Promise<void>}
 */
export async function startDrawing(canvas, fps, drawFunc) {
  const canvasInfo = await canvas.canvasInfo();

  const window = svgdom.createSVGWindow();
  svgjs.registerWindow(window, window.document);

  /** @type {svgjs.Svg} */
  const svg = svgjs.SVG(window.document.documentElement);
  svg.size(canvasInfo.width, canvasInfo.height);

  const delay = 1000 / fps;
  setInterval(() => {
    svg.clear();
    drawFunc(svg, canvasInfo.width, canvasInfo.height);

    const rendered = new Resvg(svg.svg(), {
      background: "black",
      fitTo: { mode: "original" },
    }).render();

    const image = new Image(rendered.width, rendered.height, rendered.pixels);
    canvas.draw(canvasInfo, image);
  }, delay);

  return new Promise(() => {});
}
