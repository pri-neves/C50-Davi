var inicio = 0;
var fase1 = 1;
var fase2 = 2;
var fase3 = 3;
var gameState = 0;

var chefao1, chefao1Img;

var fase1FundoImg;

var bgImage;

var fase1, fase2, fase3, fase1Img, fase2Img, fase3Img;

var jogadorImg, jogador;

var bananaImg, banana;

var base;

var musicaFase1;

function preload() {
    bgImage = loadImage("fundoDoMar.png");
    jogadorImg = loadImage("jogador.gif");
    fase1Img = loadImage("fase1.gif");
    fase2Img = loadImage("fase2.gif");
    fase3Img = loadImage("fase3.gif");
    fase1FundoImg = loadImage("deserto.png");
    chefao1Img = loadImage("Chefao1.gif");
    bananaImg = loadImage("banana.gif");
    musicaFase1 = loadSound("fase1Musica.mp3");

}

function setup() {
    createCanvas(1000,500);

    // ----

    fase2 = createSprite(750, 320, 50, 50);
    fase2.addImage("fase2Portal", fase2Img);
    fase2.scale = 0.4;

    // ----

    fase3 = createSprite(250, 305, 50, 50);
    fase3.addImage("fase3Portal", fase3Img);
    fase3.scale = 0.4;  

    // ----

    fase1 = createSprite(500, 305, 50, 50);
    fase1.addImage("fase1Portal", fase1Img);
    fase1.scale = 0.4;

    // ----

    base = createSprite(500, 450, 1000, 120);

    // ----

    chefao1 = createSprite(800, 238, 100, 100);
    chefao1.addImage("chefao1", chefao1Img);
    chefao1.scale = 0.8;

    // ----

    banana = createSprite(800, 238, 100, 100);
    banana.addImage("banana", bananaImg);
    banana.scale = 0.3;

    // ----

    jogador = createSprite(100, 368, 50, 50);
    jogador.addImage("estrelaJogador", jogadorImg);
    jogador.scale = 0.3;

}

    createEdgeSprites();

function draw() {
background(bgImage);

    jogador.collide(base);

    base.visible = false;

    if(keyDown("RIGHT")) {

        jogador.x -= -5;

    }

    if(keyDown("LEFT")) {

        jogador.x -= 5;

    }

    // if(keyDown("UP")) {

    // }

    // ----

    if(keyDown("1")) {

        gameState = 1;

    }
    if(keyDown("2")) {

        gameState = 2;

    }
    
    // ----

    if(gameState == 0){

        musicaFase1.stop();

        chefao1.visible = false;
        banana.visible = false;

    }

    if(gameState == 1){

        musicaFase1.play();

        fase2.visible = false;
        fase3.visible = false;
        fase1.visible = false;

        background(fase1FundoImg);

        chefao1.visible = true;
        banana.visible = true;

    }
    
    if(gameState == 2){
        musicaFase1.stop();
    }

    if(gameState == 3){

    }

    drawSprites();

}

function irParaFase1(){



}
