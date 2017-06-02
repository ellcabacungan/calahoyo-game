var Gameover = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        game.load.image('gameover', 'assets/weak.png');
    },

    create : function() {

     
        this.add.button(0, 0, 'gameover', this.startGame, this);

    

    },

    startGame: function () {

        this.state.start('Level1');

    }

};
game.state.add("Gameover" ,Gameover, false);
