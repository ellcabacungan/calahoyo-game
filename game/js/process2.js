var process = function() {
	"use strict";
	return {
		audio: function(audio,time) {
			setInterval (function() {
			bgAudio.play();
		},time)
		},
		scoreMe : function (hole, taya) {
			taya.kill();
			score += 10; 
    		scoreText.text = 'Shoot: ' + score+ '';
},
		restart : function (){
			game.state.start("Level1");
		},

				pause : function(){
    game.paused = true;
    pauseText.text = '        																GAME PAUSED  ';
},
unpause:  function (event){
      
   game.paused = false;
   pauseText.text = '';
},

		killPlayer : function(player, hole) {
				game.state.start("Gameover");
			player.kill();
    	

		},

		}
}();