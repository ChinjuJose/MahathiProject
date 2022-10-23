var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent = "";
var imgTag;
var img = "map.jpeg"

canvas.addEventListener("mousedown", mouseDownFn);

function mouseDownFn(e) {

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log(mouseX, mouseY)

    //Setting the position of popup
    var d = document.getElementById('sDiv');
    d.style.position = "absolute";
    d.style.left = e.clientX + 'px';
    d.style.top = e.clientY + 'px';

    //Creating popup
    var popup = document.getElementById("statePopup");

    //Checking the states
    if ((mouseX > 170 && mouseX < 220) && (mouseY > 440 && mouseY < 500)) {
        console.log("TamilNadu")
        popup.innerHTML = "TamilNadu"
        popup.classList.toggle("show");
        document.getElementById("description").innerHTML = "Tamil Nadu, or land of the Tamils, is the fourth largest state of India and is located in the extreme south of the Indian subcontinent. It is bounded by the Indian Ocean to the east and south, and by the states of Kerala to the west, Karnataka to the northwest, and Andhra Pradesh to the north."
    }

    //Add if conditions for other states here
}

canvas.addEventListener("mousemove", mouseMoveFn);
function mouseMoveFn(e) {

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log(mouseX, mouseY)
}


function add() {
    imgTag = new Image();
    imgTag.onload = uploadImg;
    imgTag.src = img;
}

function uploadImg() {
    ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
}


