var game = new Phaser.Game(604,429,Phaser.AUTO);

var GameState ={
    //load the game assets before the game starts
    preload: function(){
        this.load.image('background','assets/images/background.png');
    },
    //executed after everything is loaded
    create: function(){
        this.background = this.game.add.sprite(0,0,'background');
        this.game.state.start('MainMenu');
    },
    //this is executed multiple times per second
    update: function(){

    },
};

game.state.add('GameState',GameState);
game.state.add('MainMenu',MainMenu);
game.state.start('GameState');



