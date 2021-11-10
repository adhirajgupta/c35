class From{
    constructor(){
  }
  display(){
      var title = createELement('h2')
      title.html("Car racing game");
      title.positon(130,0);

      var input = createInput("Username");

      var button = createButton("play")
      var greeting = createELement("h3");
      
      input.position(130,160);
      button.position(250,200);
      button.mousePressed(function(){
          input.hide();
          button.hide();

          var name =  input.value();
          player_count+=1;
          player.update(name)
          player.updateCount(player_count);

          greeting.html("hello"+name);
          greeting.position(130,160);
          


      })


  }


}