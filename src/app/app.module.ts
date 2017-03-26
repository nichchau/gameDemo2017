import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { NG2_PHASER } from 'ang2-phaser/ng2phaser';
import { PhaserComponent } from './phaser.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ,PhaserComponent,NG2_PHASER],
  bootstrap: [ AppComponent ],
})export class AppModule {}