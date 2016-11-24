import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent }  from './heroes.component';
import { HeroListComponent }  from './hero-list.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeroesComponent,
        HeroListComponent
    ],
    exports:[
        HeroesComponent,
        HeroListComponent
    ]
})
export class HeroesModule { }