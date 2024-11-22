import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'lib-skeleton-loaders',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule
  ],
  template: `
    <p>
      skeleton-loaders works!
      <ngx-skeleton-loader count="5" appearance="circle" />
    </p>


    <br>
    <!-- Uses \`progress\` as animation -->
    <ngx-skeleton-loader animation="progress"/>
    <ngx-skeleton-loader/>
    <!-- Uses \`pulse\` as animation -->
    <ngx-skeleton-loader animation="pulse"/>
    <br>


    <div class="item">
      @defer {
        <p>Hi</p>
      } @placeholder (minimum 1000ms) {
        <ngx-skeleton-loader />
      }
    </div>
  `,
  styles: ``
})
export class SkeletonLoadersComponent {

}
