var game = new Phaser.Game(800, 600, Phaser.auto);
game.state.add('state1', demo.state1);
game.state.start('state1');