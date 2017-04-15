import {Component} from '@angular/core';
import {PhaserService} from './phaser.service';
import {Observable} from 'rxjs/Observable';

declare var __phaser:any;

@Component({ 
    selector: 'my-game', 
    templateUrl: './phaser.component.html',
    providers:[PhaserService],
})

export class PhaserComponent{
    phaser:any;

    constructor (private _phaserService:PhaserService){}
    
    ngOnInit(phaser:any){
    
      this.getWord();
   }
   getWord(){  
        
       this._phaserService.search().subscribe(
              data=> localStorage.setItem("word", JSON.stringify(data.Word)),
              error => alert(error),
              ()=>console.log('Finished'),
            );
          
    }

   phaserLink1(phaser:any){
  var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = 'js/phaser_game.js'; //  swap out this code when you build your own game
      document.body.appendChild(js);
      js.onload = function(){
        __phaser.game.init(phaser.container,this);
      }
    }

}

