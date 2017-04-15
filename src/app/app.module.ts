import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { NG2_PHASER } from 'ang2-phaser/ng2phaser';
import { PhaserComponent } from './phaser.component';
import { WelcomeComponent } from './welcome.component';

const appRoutes:Routes=[
  {path:'welcome',component:WelcomeComponent},
  {path:'phaser',component:PhaserComponent},
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
];
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ,WelcomeComponent,PhaserComponent,NG2_PHASER],
  bootstrap: [ AppComponent ],
})export class AppModule {}