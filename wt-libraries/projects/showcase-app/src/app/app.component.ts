import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderCardComponent } from 'wt-loaders';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase-app';
}
