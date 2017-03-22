import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { AddComponent } from './add/add.component';
import { TodoRoutingModule } from './todo.routing';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  exports: [],
  declarations: [
    TodoComponent,
    AddComponent
  ],
  providers: [],
})
export class TodoModule { }
