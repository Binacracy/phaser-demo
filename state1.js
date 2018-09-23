demo.state1 = function () {};

var cursors, grass, rocks, vel = 100;

demo.state1.prototype = {
    preload: function () {
        game.load.tilemap('field', 'assets/tilemap/field.json', null, Phaser.Tilemap.TILED_JSON); //Default is CSV. Last parameter tells Phaser to use JSON format
        game.load.image('Grass', 'assets/tilemap/Grass.png');
        game.load.image('Rock', 'assets/tilemap/Rock.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = "#dddddd";
        addChangeStateEventListener();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('Grass');
        map.addTilesetImage('Rock');
        
        grass = map.createLayer('Tile Layer 1'); //Name of the layer within Tiled app
        rocks = map.createLayer('Tile Layer 2'); //Name of the layer within Tiled app
    
        map.setCollisionBetween(3, 11, true, 'Tile Layer 2'); //Look up collision index in JSON file. Set collision to between those values in parameter 1 and 2
        map.setCollision(2, true, 'Tile Layer 1');
        
        protoman = game.add.sprite(200, 200, 'protoman');
        protoman.scale.setTo(0.2);
        game.physics.enable(protoman);
        
        cursors = game.input.keyboard.createCursorKeys(); //Creates keys for arrow keys
    },
    update: function () {
        game.physics.arcade.collide(protoman, rocks, function(){
            console.log("Colliding with a rock");
        });
        game.physics.arcade.collide(protoman, grass, function(){
            console.log("Walking on grass");
        });
        if (cursors.up.isDown){
            protoman.body.velocity.y -= vel;
        }
        else if(cursors.down.isDown){
            protoman.body.velocity.y += vel;        
        }
        else{
            protoman.body.velocity.y = 0;
        }
        
        if(cursors.left.isDown){
            protoman.body.velocity.x -= vel;        
        }
        else if(cursors.right.isDown){
            protoman.body.velocity.x += vel;        
        }
        else{
            protoman.body.velocity.x = 0;
        }
    }
};