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
var platform_browser_1 = require('@angular/platform-browser');
var peek_a_boo_parent_component_1 = require('./peek-a-boo-parent.component');
var peek_a_boo_component_1 = require('./peek-a-boo.component');
var PeekABooModule = (function () {
    function PeekABooModule() {
    }
    PeekABooModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            declarations: [
                peek_a_boo_parent_component_1.PeekABooParentComponent,
                peek_a_boo_component_1.PeekABooComponent
            ],
            exports: [
                peek_a_boo_parent_component_1.PeekABooParentComponent,
                peek_a_boo_component_1.PeekABooComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PeekABooModule);
    return PeekABooModule;
})();
exports.PeekABooModule = PeekABooModule;
//# sourceMappingURL=peek-a-boo.module.js.map