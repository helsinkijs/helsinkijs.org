import { createNoise3D } from "./simplex-noise.js";

const noise3D = createNoise3D();
const baseLength = 200;
const rangeLength = 200;
const baseSpeed = 0.05;
const rangeSpeed = 0.1;
const baseWidth = 10;
const rangeWidth = 20;
const baseHue = 120;
const rangeHue = 60;
const baseTTL = 50;
const rangeTTL = 100;
const noiseStrength = 100;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;
const backgroundColor = "hsla(220,60%,3%,1)";

const rayCount = 500;
const rayPropCount = 8;
const rayPropsLength = rayCount * rayPropCount;
const rayProps = new Float32Array(rayPropsLength);

let tick = 0;

const container = document.querySelector(".content--canvas");
const canvas = {
  a: document.createElement("canvas"),
  b: document.createElement("canvas"),
};
container.appendChild(canvas.b);
const ctx = {
  a: canvas.a.getContext("2d"),
  b: canvas.b.getContext("2d"),
};

let center = [0, 0];
resize();
window.addEventListener("resize", resize);

const rand = (n) => n * Math.random();
for (let i = 0; i < rayPropsLength; i += rayPropCount) {
  initRay(i);
}
draw();

function initRay(i) {
  let length = baseLength + rand(rangeLength);
  let x = rand(canvas.a.width);
  let y1 = center[1] + noiseStrength;
  let y2 = center[1] + noiseStrength - length;
  let n = noise3D(x * xOff, y1 * yOff, tick * zOff) * noiseStrength;
  y1 += n;
  y2 += n;
  let life = 0;
  let ttl = baseTTL + rand(rangeTTL);
  let width = baseWidth + rand(rangeWidth);
  let speed = baseSpeed + rand(2 * rangeSpeed) - rangeSpeed;
  let hue = baseHue + rand(rangeHue);

  rayProps.set([x, y1, y2, life, ttl, width, speed, hue], i);
}

function updateRay(i) {
  let i2 = 1 + i,
    i3 = 2 + i,
    i4 = 3 + i,
    i5 = 4 + i,
    i6 = 5 + i,
    i7 = 6 + i,
    i8 = 7 + i;
  let x, y1, y2, life, ttl, width, speed, hue;

  x = rayProps[i];
  y1 = rayProps[i2];
  y2 = rayProps[i3];
  life = rayProps[i4];
  ttl = rayProps[i5];
  width = rayProps[i6];
  speed = rayProps[i7];
  hue = rayProps[i8];

  drawRay(x, y1, y2, life, ttl, width, hue);

  x += speed;
  life++;

  rayProps[i] = x;
  rayProps[i4] = life;

  (x < 0 || x > canvas.a.width || life > ttl) && initRay(i);
}

function drawRay(x, y1, y2, life, ttl, width, hue) {
  let gradient;

  gradient = ctx.a.createLinearGradient(x, y1, x, y2);
  gradient.addColorStop(0, `hsla(${hue},100%,65%,0)`);
  gradient.addColorStop(0.25, `hsla(${hue},100%,65%,${fadeInOut(life, ttl)})`);
  gradient.addColorStop(
    0.5,
    `hsla(${hue + 100},100%,65%,${fadeInOut(life, ttl)})`
  );
  gradient.addColorStop(1, `hsla(${hue + 150},100%,65%,0)`);

  gradient.addColorStop(0, "black");
  gradient.addColorStop(1, "white");
  ctx.a.save();
  ctx.a.beginPath();
  ctx.a.strokeStyle = gradient;
  ctx.a.lineWidth = width;
  ctx.a.moveTo(x, y1);
  ctx.a.lineTo(x, y2);
  ctx.a.stroke();
  ctx.a.closePath();
  ctx.a.restore();
}

function fadeInOut(t, m) {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
}

function resize() {
  const { innerWidth, innerHeight } = window;

  canvas.a.width = innerWidth;
  canvas.a.height = innerHeight;

  ctx.a.drawImage(canvas.b, 0, 0);

  canvas.b.width = innerWidth;
  canvas.b.height = innerHeight;

  ctx.b.drawImage(canvas.a, 0, 0);

  center[0] = 0.5 * canvas.a.width;
  center[1] = 0.5 * canvas.a.height;
}

function render() {
  ctx.b.save();
  ctx.b.filter = "blur(12px)";
  ctx.a.globalCompositeOperation = "lighter";
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function draw() {
  tick++;
  ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, canvas.b.width, canvas.a.height);
  for (let i = 0; i < rayPropsLength; i += rayPropCount) updateRay(i);
  render();

  window.requestAnimationFrame(draw);
}
