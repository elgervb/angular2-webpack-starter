import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { AddComponent } from './add/add.component';
import { TodoRoutingModule } from './todo.routing';

@NgModule({
  imports: [
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
