const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const startPainting = () => painting = true;
const stopPainting = () => painting = false;

const onMouseMove = event => {
    const {
        events
    } = window;
    const x = event.offsetX,
        y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        getSocket().emit(events.beginPath, {
            x,
            y
        });
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        getSocket().emit(events.strokePath, {
            x,
            y
        });
    }
}

const handleColorClick = event => {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

const handleModeClick = () => {
    if (filling) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

const handleCanvasClick = () => {
    if (filling)
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

const handleCM = event => event.preventDefault();

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

if (mode)
    mode.addEventListener("click", handleModeClick);

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));