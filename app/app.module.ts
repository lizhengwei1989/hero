import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { PeekABooModule } from './demo/peek-a-boo.module';
import { AppComponent }  from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        PeekABooModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }