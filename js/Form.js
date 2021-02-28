class Form {

    constructor() {
      this.title = createElement('h2');
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.reset=createButton('Restart');
      this.greeting = createElement('h3');
      
    }

    hide(){
      
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
     this.title.hide();
    }
    
    display(){
     
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2-50, 50);
      
     
      this.reset.position(50,50);
      this.input.position(displayWidth/2-50, 100);
      this.button.position(displayWidth/2+50, displayHeight/2);
    
      this.reset.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        database.ref('players').remove();
      });

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
    
        player.name = this.input.value(); // get the value from html element
        
        playerCount+=1;
        player.index=playerCount;

        player.update()
        player.updateCount(playerCount);
       
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2-50, displayHeight/4)
      });
    }}