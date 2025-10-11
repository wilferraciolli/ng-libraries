import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatListComponent } from 'wt-websockets';

export const routes: Routes = [
  { path: '', component: AppComponent, title: 'Home' },
  { path: 'chats', component: ChatListComponent, title: 'Chats' },
  { path: '**', redirectTo: '' }
];
