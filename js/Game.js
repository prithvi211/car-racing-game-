class Game{

constructor(){}

    getState(){
            var gameStateRef= database.ref('gameState');
            gameStateRef.on("value",function(data){ // function with out name anonymous function
            gameState=data.val();
            })
    }

    update(state){
            database.ref('/').update({
                gameState:state
            })
    }

    start(){
        if(gameState===0){ //checking if the game has not begun
            player= new Player(); 
            player.getCount(); // number of players playerCount gets updated

            form = new Form(); //creating a new form for the player
            form.display(); //displays the form for that player
        }

        car1=createSprite(100,200);
        car1.addImage(car1img);
        car2=createSprite(300,200);
        car2.addImage(car2img);
        car3=createSprite(500,200);
        car3.addImage(car3img);
        car4=createSprite(700,200);
        car4.addImage(car4img);
        cars=[car1,car2,car3,car4];

    }

    play(){

        background(ground);
        form.hide();
        Player.getPlayerInfo();//allPlayers value will have all data under players node in db
        player.getCarsAtEnd();
      //  textSize(30);
     //   text("Game Start",150,200);
        
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

        textSize(15);
        if(allPlayers!=undefined){

            var index=0;
            var x=375;
            var y;

            for(var plr in allPlayers){

                index=index+1;
                x=x+300;
                y=displayHeight-allPlayers[plr].distance;

                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                   ellipseMode(RADIUS);
                   fill("red");
                   ellipse(x,y,50,50);
                    camera.position.x= displayWidth/2;
                    camera.position.y= cars[index-1].y;
                }
                else{
                    cars[index-1].shapeColor="blue"
                }

            }

            //class 37
           /* var display_position = 130;s
            for(var plr in allPlayers){
              if (plr === "player" + player.index)
                fill("red")
              else
                fill("black");
      
              display_position+=20;
              textSize(15);
              text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }*/
         }
        if(player.index!==null && keyIsDown(UP_ARROW)){
            player.distance+=10;
            player.update();
        }

        if(player.index!==null && player.distance>6900){
            console.log(" in play dist >6900")
           gameState=2;
           player.rank = player.rank+1;
           Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
    }

    end(){
        console.log("Game Ends");
        console.log("player rank is "+player.rank);
    }
}