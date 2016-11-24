import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
    imports: [
        BrowserModule,
        HeroesModule
    ],
    declarations: [
        AppComponent
        //HeroFormComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }