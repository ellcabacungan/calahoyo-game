var sprite;
var menu = {

    preload : function() {
           game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            game.stage.backgroundColor = 'blue'; 
   
            game.load.image('menu', 'assets/background.jpg');
            game.load.image('start', 'assets/start.png');
    
    },

    create: function () {

    
        this.add.sprite(0, 0, 'menu');
        this.add.button(150, 100, 'start', this.startGame, this);

    },

    startGame: function () {

      
        game.state.start('Level1');

    }


};