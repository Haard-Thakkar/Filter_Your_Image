function preload() {
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    name_of_user = document.getElementById("user_name").value;
    tint_used = tint_color;
    save(name_of_user+"_"+tint_color+'.png');
}

function filter_tint() {
    filter_color = document.getElementById("color_name").value;

    if (filter_color == "Technoblade"){
        tint_color = "#ff0000";
    }

    if (filter_color == "Dream"){
        tint_color = "#bfff00";
    }

    if (filter_color == "Electricgreen"){
        tint_color = "#72FF13";
    }
    
    else{
        tint_color = document.getElementById("color_name").value;
    }
}