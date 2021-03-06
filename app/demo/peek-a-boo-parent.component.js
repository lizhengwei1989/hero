"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zachary on 16/11/26.
 */
var core_1 = require('@angular/core');
var peek_a_boo_component_1 = require('./peek-a-boo.component');
var logger_service_1 = require('../service/logger.service');
var PeekABooParentComponent = (function () {
    function PeekABooParentComponent(logger) {
        this.hasChild = false;
        this.heroName = 'Windstorm';
        this._logger = logger;
        this.hookLog = logger.logs;
    }
    PeekABooParentComponent.prototype.toggleChild = function () {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'Windstorm';
            this._logger.clear(); // clear log on create
        }
        this._logger.tick();
    };
    PeekABooParentComponent.prototype.updateHero = function () {
        this.heroName += '!';
        this._logger.tick();
    };
    PeekABooParentComponent = __decorate([
        core_1.Component({
            selector: 'peek-a-boo-parent',
            template: "\n  <div class=\"parent\">\n    <h2>Peek-A-Boo</h2>\n    <button (click)=\"toggleChild()\">\n      {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent\n    </button>\n    <button (click)=\"updateHero()\" [hidden]=\"!hasChild\">Update Hero</button>\n    <peek-a-boo *ngIf=\"hasChild\" [name]=\"heroName\">\n    </peek-a-boo>\n    <h4>-- Lifecycle Hook Log --</h4>\n    <!--<div *ngFor=\"#msg of hookLog\">{{msg}}</div>-->\n  </div>\n  ",
            styles: ['.parent {background: moccasin}'],
            directives: [peek_a_boo_component_1.PeekABooComponent],
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], PeekABooParentComponent);
    return PeekABooParentComponent;
}());
exports.PeekABooParentComponent = PeekABooParentComponent;
//# sourceMappingURL=peek-a-boo-parent.component.js.map