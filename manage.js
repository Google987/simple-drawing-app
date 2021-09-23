var canvas = document.getElementById("canvas");
var con = canvas.getContext('2d');
var startX = 0;
var startY = 0;


canvas.addEventListener("dblclick", drawRectDblClick);
canvas.addEventListener("mousedown", drawRectMouseDown);
canvas.addEventListener("mousemove", drawRectMouseMove);
canvas.addEventListener("mouseup", drawRectMouseUp);


canvas.addEventListener('mousedown', drawCircleMouseDown, false);
canvas.addEventListener('mouseup', drawCircleMouseUp, false);
canvas.addEventListener('mousemove', drawCircleMouseMove, false);
