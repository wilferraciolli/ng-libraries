import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'wt-loaders',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule
  ],
  template: `
    <p>
      <ngx-skeleton-loader count={{circleCount}}
                           appearance="circle"/>
    </p>

    <br>

    progress, should progress
    <ngx-skeleton-loader
      animation="progress"/>
    <ngx-skeleton-loader/>

    <p> pulse, should puse
      <ngx-skeleton-loader
        animation="pulse"/>
    </p>
    <br>

  `,
  styles: ``
})
export class WtLoadersComponent {
  @Input()
  public circleCount: number = 1;
}
