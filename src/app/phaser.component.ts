import {Component} from '@angular/core';
declare var __phaser:any;

@Component({ 
    selector: 'my-game', 
    templateUrl: './phaser.component.html',
})

export class PhaserComponent{
  
    phaserLink1(phaser:any){
  var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = 'js/phaser_game.js'; //  swap out this code when you build your own game
      document.body.appendChild(js);
      js.onload = function(){
         __phaser.game.init(phaser.container, this,"Dictionary API");
      }
    }

}

