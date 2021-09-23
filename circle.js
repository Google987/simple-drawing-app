var circles = [];
var offsetX = canvas.offsetLeft;
var offsetY = canvas.offsetTop;
var isMouseDown = false;
var circle, radius;

function Circle(startX, startY) {
  this.startX = startX;
  this.startY = startY;
  this.radius;
  this.draw = function () {
    con.beginPath();
    con.arc(this.startX-5, this.startY-5, this.radius, 0, 2 * Math.PI);
    con.strokeStyle = 'black';
    con.stroke();
    con.lineWidth = 2;

  }
}

function drawCircleMouseDown(e) {
  startX = parseInt(e.clientX - offsetX);
  startY = parseInt(e.clientY - offsetY);
  isMouseDown = true;
  circle = new Circle(startX, startY);
  circles.push(circle);
}

function drawCircleMouseUp() {
  isMouseDown = false;
  circle = null;
}

function drawCircleMouseMove(e) {
  if (!isMouseDown) {
    return;
  }
  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);
  circle.radius = getDistance(startX, startY, mouseX, mouseY);
  con.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(function (circ) {
    circ.draw();
  });


}

function randomColor() {
  var r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgb;
}

function getDistance(p1X, p1Y, p2X, p2Y) {
  return Math.sqrt(Math.pow(p1X - p2X, 2) + Math.pow(p1Y - p2Y, 2))
}