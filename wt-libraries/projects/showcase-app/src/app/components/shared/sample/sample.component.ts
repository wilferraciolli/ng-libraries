import { Component, signal, WritableSignal } from '@angular/core';
import { StarRatingComponent } from 'wt-components';
import { LoaderCardComponent } from 'wt-loaders';
import { UserRoleMapperPipe } from 'wt-core';

@Component({
  selector: 'wt-sample',
  imports: [LoaderCardComponent, StarRatingComponent, UserRoleMapperPipe],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  title = 'showcase-app';

  public onRatingChanged(rating: number): void {
    console.log(rating);
  }
}
