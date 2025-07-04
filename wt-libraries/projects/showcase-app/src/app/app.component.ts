import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from 'wt-components';
import { LoaderCardComponent } from 'wt-loaders';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderCardComponent, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase-app';

  public onRatingChanged(rating: number): void {
    console.log(rating);
  }
}
