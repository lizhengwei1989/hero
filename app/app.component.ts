import { Component,OnInit } from '@angular/core';
import { Hero } from './model/hero';
@Component({
   selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements OnInit{
    ngOnInit(){
        console.log('我是根组件')
    }
}

