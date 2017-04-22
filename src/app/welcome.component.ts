import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({ 
    selector: 'welcome-my-game', 
    templateUrl: './welcome.component.html',
    styleUrls: ['./app.component.scss']
})

export class WelcomeComponent{  
    title = 'Hangman Game';
     ngOnInit() {
         this.title = 'Hangman Game';
    }
}

