import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'wt-loader-card',
  standalone: true,
  imports: [MatCard, MatCardContent, NgxSkeletonLoaderModule],
  templateUrl: './loader-card.component.html',
  styleUrl: './loader-card.component.css'
})
export class LoaderCardComponent {
  @Input()
  public circleCount: number = 1;
}
