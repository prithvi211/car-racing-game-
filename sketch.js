var gameState=0,playerCount=0;
var database;
var game,form,player;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1img,car2img,car3img,car4img;

function preload(){
car1img= loadImage("images/car1.png");
car2img= loadImage("images/car2.png")
car3img= loadImage("images/car3.png")
car4img= loadImage("images/car4.png")
track= loadImage("images/track.jpg")
ground= loadImage("images/ground.png")

}

function setup(){
    
    //establishing connection with db
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);  

    game= new Game();
    game.getState(); //we are getting from db gameState
    game.start();
}

function draw(){
    background("white");

  if(playerCount===4){
      game.update(1);
     // gameState=1;
  }
    if(gameState===1){
        clear();
        console.log("in gamestate===1")
        game.play();
    }
    if(gameState===2){
        game.end();
    }
}
                                                                        