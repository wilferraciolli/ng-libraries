import { Routes } from '@angular/router';
import { ChatListComponent } from 'wt-websockets';
import { HomeComponent } from './components/shared/home/home.component';
import { SampleComponent } from './components/shared/sample/sample.component';
import { GraphListComponent } from './components/graphs/graph-list/graph-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'samples', component: SampleComponent, title: 'Sample' },
  { path: 'chats', component: ChatListComponent, title: 'Chats' },
  { path: 'charts', component: GraphListComponent, title: 'Charts and graphs' },
  { path: '**', redirectTo: '' }
];
