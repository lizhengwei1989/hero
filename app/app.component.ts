import { Component,OnInit } from '@angular/core';
@Component({
   selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements OnInit{
    ngOnInit(){
        console.log('我是根组件')
    }
}

