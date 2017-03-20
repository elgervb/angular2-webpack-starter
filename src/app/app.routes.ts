import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { BarrelModule } from './+barrel/barrel.module';
import { DetailModule } from './+detail/detail.module';
import { TodoModule } from './todo/todo.module';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: () => DetailModule},
  { path: 'barrel', loadChildren: () => BarrelModule},
  { path: 'todo', loadChildren: () => TodoModule },
  { path: '**',    component: NoContentComponent },
];
