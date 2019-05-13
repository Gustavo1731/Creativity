var diam1=0;

function setup() {
    createCanvas(800, 600);
    background('red');
}

function draw() {
    fill('red');
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(200, 200, diam1, diam1)
    fill('blue')
    ellipse(random(width), random(height), 40, 40);
    textSize(30);
    textFont("TimesNewRoman");
    textStyle(ITALIC);
    textAlign(LEFT);
    text("Gustavo Segovia", 40, 40);
}

function mousePressed(){
    if(diam1>50){
       diam1=0;
    }else{
    diam1=diam1+5;
    }
}