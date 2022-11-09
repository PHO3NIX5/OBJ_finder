Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(900,700);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(900,700);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,900,700);
}