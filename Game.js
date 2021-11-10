class Game{
    constructor(){

    }
    
getState(){
  var GameStateref = database.ref("Game_state");
  GameStateref.on("value",function(data){
  Game_state=data.val()
  })

}

update(state){
database.ref('/').update({Game_state:state});
}
    start(){
        if(Game_state===0){
            player=new PLayer();
            player.getCount();
            form = new Form();
            form.display();















        }
    }
}