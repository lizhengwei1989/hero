/**
 * Created by zachary on 16/11/26.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PeekABooParentComponent }  from './peek-a-boo-parent.component';
import { PeekABooComponent }  from './peek-a-boo.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PeekABooParentComponent,
        PeekABooComponent
    ],
    exports:[
        PeekABooParentComponent,
        PeekABooComponent
    ]
})
export class PeekABooModule { }