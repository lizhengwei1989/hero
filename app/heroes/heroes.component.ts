import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    selector: 'my-heroes',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <hero-list [heroes]="heroes"></hero-list>
    <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
  `,
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

