var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var protoman;
var speed = 4;
demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.image('protoman', 'assets/sprites/Protoman1.0.png');
        
    },
    create: function () {
        this.game.stage.backgroundColor = "#00FF00";
        console.log("state0");
        addChangeStateEventListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        protoman = game.add.sprite(centerX, centerY, 'protoman');
        protoman.anchor.setTo(0.5);
    },
    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            protoman.x += speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            protoman.x -= speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            protoman.y -= speed;
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