var h = 1000;
var w = 580;
var bgAudio;
var sprite1;
var sprite2;
var cursors;
var goRight;
var goLeft;
var niceText;
var text;
var goUp;
var goDown;
var restart;
var pause;
var scoreText;
var bestScoreText;
var keyboard;
var reset;
var pause;
var pauseText;
var player;
var taya;
var menu;
var score = 0;
var evelyn;
var left=false;
var right=false;
var up = false;
var down = false;

game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.state.add('menu', menu);
game.state.start('menu');

game.state.add('Level1');
game.state.add('Gameover');