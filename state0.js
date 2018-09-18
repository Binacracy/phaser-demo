var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var protoman;
var speed = 6;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('protoman', 'assets/spritesheet/Protoman_spritesheet.png', 320, 320);
        game.load.image('citybg', 'assets/backgrounds/city_background.png');
        
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = "#00FF00";
        console.log("state0");
        addChangeStateEventListener();
        game.world.setBounds(0, 0, 3000, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var citybg = game.add.sprite(0, 0, 'citybg');
        protoman = game.add.sprite(centerX, centerY, 'protoman');
        protoman.anchor.setTo(0.5);
        protoman.scale.setTo(0.7);
        
        game.physics.enable(protoman);
        protoman.body.collideWorldBounds = true;
        
        protoman.animations.add('walk', [0,1]);
        
        game.camera.follow(protoman);
        game.camera.deadzone = new Phaser.Rectangle(centerX, - 300, 0, 600, 1000);
       
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            protoman.x += speed;
            protoman.scale.setTo(0.7);
            protoman.animations.play('walk', 14, true);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            protoman.x -= speed;
            protoman.scale.setTo(-0.7, 0.7);
            protoman.animations.play('walk', 14, true);
        }
        else{
            protoman.animations.stop('walk');
            protoman.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            protoman.y -= speed;
            if (protoman.y < 386.9){
                protoman.y = 386.9;
            }
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            protoman.y += speed;
        }
    }
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallBack(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addChangeStateEventListener(){
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
};