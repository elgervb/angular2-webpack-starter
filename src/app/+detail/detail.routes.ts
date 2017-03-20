import { DetailComponent } from './detail.component';
import { ChildDetailModule } from './+child-detail/child-detail.module';

export const routes = [
  { path: '', children: [
    { path: '', component: DetailComponent },
    { path: 'child-detail', loadChildren: () => ChildDetailModule }
  ]},
];
