import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
@Component({
    selector: 'my-heroes',
    directives:'HeroListComponent',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <div class="hero-list">
        <hero-list [tt]="tt" [heroes]="heroes"></hero-list>
    </div>
    <div class="hero-detail">
        <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
    </div>
  `,
    styles:[`
       .hero-list{width:16em;float:left}
       .hero-detail{width:16em;float:left;margin-left:2em}
    `],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    tt='222';
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    ngOnInit(): void {
        console.log('我是英雄根组件');
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

