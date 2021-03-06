var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HeroListComponent = (function () {
    //@Input('heroes') set changeName(val: any) {
    //    console.log(val);
    //}
    //@Input('tt') set changeName(val2: any) {
    //    console.log(val2);
    //}
    function HeroListComponent() {
    }
    HeroListComponent.prototype.ngOnInit = function () {
        console.log('我是英雄列表组件');
        console.log(this.tt);
    };
    HeroListComponent.prototype.onSelect = function (hero, e) {
        console.log(hero);
        this.selectedHero = hero;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroListComponent.prototype, "heroes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroListComponent.prototype, "tt", void 0);
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'hero-list',
            template: "\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero,$event)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes{\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroListComponent);
    return HeroListComponent;
})();
exports.HeroListComponent = HeroListComponent;
13381185204;
//# sourceMappingURL=hero-list.component.js.map