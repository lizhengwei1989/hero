import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    template: '<input [(ngModel)]="hero.name" placeholder="name"><span>{{hero.name}}</span>'
})
export class AppComponent {
    hero: Hero = {
        id: 1,
        name: 'Windstorm',
        say:()=>{
            console.log('@@')
        }
    };
    title = 'Tour of Heroes';
    //hero = 'Windstorm';

}


