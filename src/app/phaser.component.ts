import {Component,Input} from '@angular/core';
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
    
   a(phaser:any){ 
         this.getWord();
       //  this.getMusic();
   }
   getWord(){  
       let a:string[];
     for(let i=0;i<10;++i){
       this._phaserService.search().subscribe(             
              data=> localStorage.setItem("word_"+i, JSON.stringify(data.Word)),
              error => alert(error),
              ()=>console.log('Finished'),
            );
        } 
    }
    getMusic(){
        var audio= new Audio;
        audio.src="background_music.wav";
        audio.load();
        audio.play();
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

