//--------------
__phaser = {

    gameObj: null,

    //-------------------
    game:{

      //-------------------
      init(canvasEle, phaserComponent){
               
              // create game object
              var game = new Phaser.Game(1280, 600, Phaser.AUTO, canvasEle, { preload: preload, create: create, update: update });
              var gameState = "preload"
              var playButton;
              var phaser_logo;
              var introText;
              var gameTitle;
              var gameWord=new Array(10);
              for (i = 0; i < 10; i++) { 
                 gameWord[i]=localStorage.getItem("word_"+i);
                 console.log(gameWord[i]);
             }
             // var gameWord= localStorage.getItem("word");//get Word from session
           // var gameWord= JSON.parse(localStorage.getItem("word"));
              //localStorage.removeItem("word");
              // assign it
              __phaser.gameObj = game;
             //console.log(gameWord);
             

  

                            //-----------------------  PRELOAD
            function preload() {

                // set canvas color
                game.stage.backgroundColor = '#000000';
                
                // load images/sounds/scripts
                game.load.image('phaser_logo','assets/images/htitle.png');
                game.load.image('gameTitle','assets/images/background.png');
                
                // preloader events
                game.load.onLoadStart.add(loadStart, this);
                game.load.onFileComplete.add(fileComplete, this);
                game.load.onLoadComplete.add(loadComplete, this);
                game.load.enableParallel = true;
            }
            //-----------------------

            //-----------------------  CREATE
            function create() {

            }
            //-----------------------


            //-----------------------
            function loadStart() {
                // text
                loadingtext = game.add.text(game.world.centerX, game.world.centerY/2, "");
                loadingtext.anchor.set(0.5);
                loadingPercentage = game.add.text(game.world.centerX, game.world.centerY, "");
                loadingPercentage.anchor.set(0.5);
            }
            //-----------------------

            //-----------------------
            function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            	loadingtext.setText("Loading...");
                loadingPercentage.setText(progress + "%")
            }
            //-----------------------

            //-----------------------
            function preloaderUpdate(){
                // upadate cycle for anything in preload state
            }
            //-----------------------

            //-----------------------
            function loadComplete() {
            	loadingtext.setText("All assets loaded");
                loadingPercentage.setText("100%")

                // add slight delay before starting game
                game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                    loadingtext.destroy();
                    loadingPercentage.destroy();
                    startGame()
                }, this).autoDestroy = true;
            }
            //-----------------------


            //-----------------------
            function startGame(){
            
               gameState = "gameTitle"
                // define sprite
               phaser_logo = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser_logo');
               phaser_logo.anchor.setTo(0.5,0.5);
               phaser_logo.width = 700;
               phaser_logo.height = 150;
               introText = game.add.text(game.world.centerX,game.world.centerY+150,'- Click to start -',{font: "40px Arial", fill: "#ffffff", align: "center" });
               introText.anchor.setTo(0.5,0.5);
               game.input.onDown.add(removeLogo,this);
            }
            function playGame(){
               gameState="theGame";
               gameTitle = game.add.sprite(game.world.centerX, game.world.centerY, 'gameTitle');//for testing only
               gameTitle.anchor.setTo(0.5,0.5);

               /*
                *
                *  Your Game Code
                *
                */                             
               
            }
            function removeLogo () {
            game.input.onDown.remove(removeLogo, this);
            phaser_logo.kill();
            introText.visible = false;
            playGame();
            }
            //-----------------------
            function gameplayUpdate(){
                
            }
            //-----------------------
            function theGameUpdate(){
                
            }

            //-----------------------  UPDATE
            function update() {

                // list of gamestates and their loops
                if(gameState == "preload"){ preloaderUpdate() }
                if(gameState == "gameTitle"){ gameplayUpdate() }
                if(gameState == "theGame"){ theGameUpdate() }

            }
            //-----------------------
      },



    },
    //-------------------


    //-------------------
    destroyGame(callback){
          this.gameObj.destroy();
          callback();
    }
    //-------------------


}
//--------------
