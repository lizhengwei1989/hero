import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        //HeroFormComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }