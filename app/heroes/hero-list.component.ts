import { Component,OnInit,Input }   from '@angular/core';
@Component({
    selector: 'hero-list',
    template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero,$event)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes{
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
    //inputs:['tt','heroes']

})
export class HeroListComponent implements OnInit{
    selectedHero:Hero;
    @Input()heroes : any;
    @Input()tt:any;
    //@Input('heroes') set changeName(val: any) {
    //    console.log(val);
    //}
    //@Input('tt') set changeName(val2: any) {
    //    console.log(val2);
    //}
    constructor(){

    }

    ngOnInit(): void {
        console.log('我是英雄列表组件')
        console.log(this.tt);
    }
    onSelect(hero: Hero,e): void {
        console.log(hero);
        this.selectedHero = hero;
    }
}
13381185204