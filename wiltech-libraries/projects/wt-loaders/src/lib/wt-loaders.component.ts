import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'wt-loaders',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule
  ],
  template: `
    <p>
      wt-loaders works!
    </p>
    <p>
      skeleton-loaders works!
      <ngx-skeleton-loader count="5"
                           appearance="circle"/>
    </p>

    <br>

    <ngx-skeleton-loader
      animation="progress"/>
    <ngx-skeleton-loader/>

    <p> pulse
      <ngx-skeleton-loader
        animation="pulse"/>
    </p>
    <br>

  `,
  styles: ``
})
export class WtLoadersComponent {

}
