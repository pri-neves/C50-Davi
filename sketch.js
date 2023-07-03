var bgImage;

function preload(){
    bgImage = loadImage("LOBBY.png");
}

function setup(){
    createCanvas(1000,500);
}

function draw(){
background(bgImage);
}