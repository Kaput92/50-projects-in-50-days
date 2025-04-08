/* Buttons and inputs */

const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const colorBtn = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const sizeEL = document.getElementById("size");

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  sizeEL.innerText = size;
});

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  sizeEL.innerText = size;
});

colorBtn.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  clearCanvas();
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/* Variables for the canvas */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

/* Functions for drawing on the canvas */

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
