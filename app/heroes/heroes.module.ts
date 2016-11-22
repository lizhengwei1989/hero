import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HeroesComponent }  from './heroes.component';
import { HeroListComponent }        from './hero-list.component';
@NgModule({
    imports: [
        NgModule,
        BrowserModule
    ],
    declarations: [
        //HeroesComponent,
        HeroListComponent
    ],
    bootstrap: []//[ //HeroesComponent ]
})
export class HeroesModule { }