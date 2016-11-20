import { Component } from '@angular/core';
import { Hero }    from './model/hero';
@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    newHero(){
        this.model = new Hero(32, 'zachary',this.powers[1],'Hight EQ');
    }
    //TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
