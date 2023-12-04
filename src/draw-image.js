import { LEDCanvas } from "christmas-client-js";
import * as imagejs from "image-js";

const url = "ws://localhost:9001/ws/018c2514-0f9f-7049-9e94-896eef21a46d";

const canvas = new LEDCanvas(url);
await canvas.connect();

const canvasInfo = await canvas.canvasInfo();
console.log(`Canvas is ${canvasInfo.width}x${canvasInfo.height}`);

const imagePath = "static/rainbow.jpg";
const image = await imagejs.Image.load(imagePath);
console.log(`Loaded ${imagePath} (${image.width}x${image.height})`);

canvas.draw(canvasInfo, image);
console.log(`Drew ${imagePath}!`);
