var bgAudio;
var sprite1;
var sprite2;
var cursors;
var goRight;
var goLeft;
var goUp;
var goDown;
var pasueText;
var restart;
var pause;
var scoreText;
var bestScoreText;
var keyboard;
var reset;
var pause;
var player;
var pause;
var taya;
var text;
var niceText;
var score = 0;
var evelyn;
var left=false;
var right=false;
var up = false;
var down = false;

var Level1 = {

preload: function() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = 'blue'; 

    game.load.image("bg","assets/rec.jpg");
    game.load.image("line", "assets/line.jpg");
    game.load.image("hole", "assets/hole.png");
    game.load.image("taya", "assets/anak.png");
    game.load.image("pamato", "assets/pamato.png");
    game.load.image("point", "assets/btnup.png");
    game.load.audio("bgMusic","music/bgMusic.mp3");
    game.load.image("reset", "assets/btn-restart.png");
    game.load.image("pause", "assets/p&p.png");
    game.load.image("up", "assets/btnup.png");
    game.load.image("down", "assets/btndown.png");
    game.load.image("left", "assets/btnleft.png");
    game.load.image("right", "assets/btnright.png");
    game.load.image("restart", "assets/reset.png");
    game.load.spritesheet("aw", "assets/aw.png",62,63);

	},

create: function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0,0,"bg");
		game.add.sprite(0,400,"line");

		bgAudio = game.add.audio("bgMusic");
		bgAudio.loop = true;
		bgAudio.play();

		hole = game.add.group();
		hole.enableBody=true;
		var evelyn = hole.create(220,100,"hole");
		evelyn.body.immovable=true;

		taya = game.add.group();
		taya.enableBody=true;

		var ellen = taya.create(50,300,"taya")
		ellen.body.immovable=false;
		ellen.body.collideWorldBounds = true;
		ellen.body.bounce.y = 0.2;
		  
		var ellen = taya.create(150,300,"taya")
		ellen.body.immovable=false;
		ellen.body.bounce.y = 0.2;
		ellen.body.collideWorldBounds = true;

		var ellen = taya.create(250,300,"taya")
		ellen.body.immovable=false;
		ellen.body.collideWorldBounds = true;
		ellen.body.bounce.y = 0.2;

		var ellen = taya.create(350,300,"taya")
		ellen.body.immovable=false;
		ellen.body.collideWorldBounds = true;
		ellen.body.bounce.y = 0.2;

		var ellen = taya.create(450,300,"taya")
		ellen.body.immovable=false;
		ellen.body.collideWorldBounds = true;
		ellen.body.bounce.y = 0.2;

		var ellen = 
		  
		btn = game.add.button(400,850,"restart", process.restart);

		game.input.onDown.add(process.unpause, self);
        btn = game.add.button(300,850,"pause",process.pause);

		cursors = game.input.keyboard.createCursorKeys();


		buttonleft = game.add.button(50, 880, 'left');
		buttonleft.anchor.setTo(0.5, 0.5);
		buttonleft.events.onInputOver.add(function(){left=true;});
		buttonleft.events.onInputOut.add(function(){left=false;});
		buttonleft.events.onInputDown.add(function(){left=true;});
		buttonleft.events.onInputUp.add(function(){left=false;});
		      
		buttonright = game.add.button(170, 880, 'right');
		buttonright.anchor.setTo(0.5, 0.5);
		buttonright.events.onInputOver.add(function(){right=true;});
		buttonright.events.onInputOut.add(function(){right=false;});
		buttonright.events.onInputDown.add(function(){right=true;});
		buttonright.events.onInputUp.add(function(){right=false;});

		buttonup = game.add.button(110, 800, 'up');
		buttonup.anchor.setTo(0.5, 0.5);
		buttonup.events.onInputOver.add(function(){up=true;});
		buttonup.events.onInputOut.add(function(){up=false;});
		buttonup.events.onInputDown.add(function(){up=true;});
		buttonup.events.onInputUp.add(function(){up=false;});

		buttondown = game.add.button(110, 950, 'down');
		buttondown.anchor.setTo(0.5, 0.5);
		buttondown.events.onInputOver.add(function(){down=true;});
		buttondown.events.onInputOut.add(function(){down=false;});
		buttondown.events.onInputDown.add(function(){down=true;});
		buttondown.events.onInputUp.add(function(){down=false;});

		player = game.add.sprite(250, game.world.height -400, 'aw');

		game.physics.arcade.enable(player);

		player.body.bounce.y = 0.2;
		player.body.collideWorldBounds = true;

		player.animations.add('left', [9,1, 3],10, true); 
		player.animations.add('right', [1, 3,9],10, true); 
		player.animations.add('up', [4, 5,6 ,7],10, true); 
		player.animations.add('down', [4, 5,6 ,7],10, true); 

		scoreText = game.add.text(16, 16, 'Score : 0 ', { fontSize: '32px', fill: 'yellow' });
        pauseText = game.add.text(0, 350, '', { fontSize: '500px', fill: 'blue' });

		scoreText.fixedToCamera=true;
		},

update: function() {
    game.physics.arcade.collide(taya, taya);
    game.physics.arcade.collide(player, taya);
    game.physics.arcade.overlap(hole, taya, process.scoreMe, null,this);
    game.physics.arcade.overlap(hole, player, process.killPlayer, null, this);

    if (left){
        player.body.velocity.x=-120;
        player.animations.play('left');
        }

    else if (right){
        player.body.velocity.x=120;
        player.animations.play('right');
        } 
    else {
        player.body.velocity.x=0;
		player.frame = 1;
        }
	if (game.input.currentPointers == 0 && !game.input.activePointer.isMouse){ fire=false; right=false; left=false; duck=false; jump=false;} //this 

    if (up){   
        player.body.velocity.y=-120;
        player.animations.play('up');
        }
    else if (down){
        player.body.velocity.y=120;
        player.animations.play('down');
        } 
    if (game.input.currentPointers == 0 && !game.input.activePointer.isMouse){ fire=false; up=false; down=false; duck=false; jump=false;} //this 
        },
}
game.state.add("Level1", Level1, false);