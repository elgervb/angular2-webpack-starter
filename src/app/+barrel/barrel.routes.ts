import { BarrelComponent } from './barrel.component';
import { ChildBarrelModule } from './+child-barrel/child-barrel.module';

export const routes = [
  { path: '', children: [
    { path: '', component: BarrelComponent },
    { path: 'child-barrel', loadChildren: () => ChildBarrelModule }
  ]},
];
