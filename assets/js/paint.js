import {
    getSocket
} from './sockets';

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const controls = document.getElementById("jsControls");
const colors = controls.getElementsByClassName("jsColor");
const mode = controls.querySelector(".jsMode");

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

const beginPath = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
}

const strokePath = (x, y, color = null) => {
    const currentColor = ctx.strokeStyle;
    if (color !== null)
        ctx.strokeStyle = color;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.strokeStyle = currentColor; // 기존색상으로 변경 
}

const onMouseMove = event => {
    const {
        events
    } = window;
    const x = event.offsetX,
        y = event.offsetY;
    if (!painting) {
        beginPath(x, y);
        getSocket().emit(events.beginPath, {
            x,
            y
        });
    } else {
        strokePath(x, y);
        getSocket().emit(events.strokePath, {
            x,
            y,
            color: ctx.strokeStyle
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

const fill = (color = null) => {
    const currentColor = ctx.fillStyle;
    if (color !== null)
        ctx.fillStyle = color;
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.fillStyle = currentColor; // 기존색상으로 변경 
}

const handleCanvasClick = () => {
    const {
        events
    } = window;
    if (filling) {
        fill();
        getSocket().emit(events.fill, {
            color: ctx.fillStyle
        });
    }
}

const handleCM = event => event.preventDefault();

if (mode)
    mode.addEventListener("click", handleModeClick);

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

export const handleBeganPath = ({
    x,
    y
}) => beginPath(x, y);
export const handleStrokedPath = ({
    x,
    y,
    color
}) => strokePath(x, y, color);
export const handleFilled = ({
    color
}) => fill(color);

export const disableCanvas = () => {
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mousedown", startPainting);
    canvas.removeEventListener("mouseup", stopPainting);
    canvas.removeEventListener("mouseleave", stopPainting);
    canvas.removeEventListener("click", handleCanvasClick);
}

export const enableCanvas = () => {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

export const hideControls = () => controls.style.opacity = 0;
export const showControls = () => controls.style.opacity = 1;

export const resetCanvas = () => fill("#FFF");

if (canvas) {
    disableCanvas();
    canvas.addEventListener("contextmenu", handleCM);
}