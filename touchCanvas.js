var can  = document.getElementById("canvas"),
    ctx = can.getContext('2d'),
    mousePressed = false,
    mouseX = 0,
    mouseY = 0;
can.addEventListener('touchmove', onTouchMove, false);
can.addEventListener('touchstart', onTouchStart, false);
can.addEventListener('touchend', onMouseUp, false);

can.height = window.innerHeight;
can.width = window.innerWidth;
// Tablet
function onTouchMove(event){
    if (mousePressed) {
        event.preventDefault();
        mouseX = (event.targetTouches[0].pageX) - can.offsetLeft;
        mouseY = (event.targetTouches[0].pageY) - can.offsetTop;
        ctx.lineWidth = 5;
        ctx.lineCap='round'
        ctx.lineJoin='round'
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        
    }
}

function onTouchStart(event){
    mousePressed = true;
    mouseX = (event.targetTouches[0].pageX) - can.offsetLeft;
    mouseY = (event.targetTouches[0].pageY) - can.offsetTop;
    ctx.beginPath();
    ctx.moveTo(mouesX, mouseY);
}

function onMouseUp(event){
    mousePressed = false;
}
// Desktop
can.addEventListener('mousemove', onMouseMove, false);
can.addEventListener('mousedown', onMouseDown, false);
can.addEventListener('mouseup', onMouseUp, false);

function onMouseMove(event) {
    if (mousePressed) {
        event.preventDefault();
        mouseX = event.clientX - can.offsetLeft;
        mouseY = event.clientY - can.offsetTop;
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    mousePressed = true;
    mouseX = event.clientX - can.offsetLeft;
    mouseY = event.clientY - can.offsetTop;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
}

// $('#clearsig')[0].addEventListener('click', clearSignature, false);

// function clearSignature() {
//     ctx.clearRect(0, 0, can.width, can.height);
// }