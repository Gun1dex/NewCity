var game = new Phaser.Game(1500,800);

var dodger = {
    preload: function(){
        //Chargement image
        game.load.image('fond','../web/img/jeu/fondHerbe.jpg');
        game.load.image('arbre','img/jeu/grosArbre.png');
    },
    create: function(){
        game.add.sprite(0,0, 'fond');
        game.add.sprite(40,70,'arbre');
        game.add.sprite(150,200, 'arbre');
    },
    update: function(){

    }

};

game.state.add('dodger',dodger);
game.state.start('dodger');