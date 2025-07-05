import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRatingComponent } from 'wt-components';
import { LoaderCardComponent } from 'wt-loaders';
// import { UserRoleMapperPipe } from '../../../wt-core/src/lib/pipes/user-role-mapper.pipe';
import { UserRoleMapperPipe } from 'wt-core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderCardComponent,
    StarRatingComponent,
    UserRoleMapperPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase-app';

  public onRatingChanged(rating: number): void {
    console.log(rating);
  }
}
