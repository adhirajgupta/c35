class PLayer{
    constructor(){

    }
    getCount(){
        var playercountref = database.ref('player_count');
        playercountref.on('value',function(data){
            player_count = data.val();
        });

    }
}