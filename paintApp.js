var drag = false;
var move = false;
var doubleClick = false;
var mouseDown = false;
var width = 0;
var height = 0;

function Box() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.fill = '#444444';
}
var boxes = [];

function drawRectDblClick(event) {
    doubleClick = true;
    drag = false;
    startX = event.offsetX;
    startY = event.offsetY;
    var i = -1;
    for (let box of boxes) {
        i++;
        if (startX > box.x && startX < box.x + box.w &&
            startY > box.y && startY < box.y + box.h) {
            con.clearRect(box.x - 1, box.y - 1, box.w + 2, box.h + 2);
            boxes.splice(i, 1);
            doubleClick = false;
            drawAll();
            console.log("deleted!!2");
            break;
        }
    };
}

function drawRectMouseDown(event) {
    mouseDown = true;
    startX = event.offsetX;
    startY = event.offsetY;
}

var b = null;
function drawRectMouseMove(event) {
    if (mouseDown)
        drag = true;
    if (drag) {

        width = event.offsetX - startX;
        height = event.offsetY - startY;

        var i = -1;
        if (b) {
            con.clearRect(0, 0, canvas.width, canvas.height);
            drawAll();
            con.fillStyle = b.fill;
            con.fillRect(b.x + event.offsetX - startX, b.y + event.offsetY - startY, b.w, b.h);
        }
        for (let box of boxes) {
            i++;
            if (startX > box.x && startX < box.x + box.w &&
                startY > box.y && startY < box.y + box.h && b === null) {
                b = box;
                con.clearRect(box.x - 1, box.y - 1, box.w + 2, box.h + 2);
                boxes.splice(i, 1);
                drawAll();
                console.log("deleted!!");
                break;
            }
        };
    } return;
}

function drawRectMouseUp(event) {
    mouseDown = false;
    var color = randomColor();
    if (b) {
        startX = b.x + width;
        startY = b.y + height;
        width = b.w; height = b.h;
        color = b.fill;
        b = null;
    }
    if (drag) {
        con.lineWidth = 2;
        con.strokeStyle = "black";

        con.fillStyle = color;
        con.fillRect(startX, startY, width, height);
        con.strokeRect(startX, startY, width, height);
        var rect = new Box;
        rect.x = width < 0 ? startX + width : startX;
        rect.y = height < 0 ? startY + height : startY;
        rect.w = width < 0 ? (width * -1) : width;
        rect.h = height < 0 ? (height * -1) : height;
        rect.fill = color;
        boxes.unshift(rect);
        drag = false;
        b = null;
    } return;
}

function reset() {
    console.log('reset');
    boxes.splice(0, boxes.length)
    con.clearRect(0, 0, canvas.width, canvas.height);
}

function randomColor() {
    var r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}

function drawAll() {
    for (var j = boxes.length - 1; j >= 0; j--) {
        con.fillStyle = boxes[j].fill;
        //con.beginPath();
        con.fillRect(boxes[j].x, boxes[j].y, boxes[j].w, boxes[j].h);
        con.strokeRect(boxes[j].x, boxes[j].y, boxes[j].w, boxes[j].h);
    }
}