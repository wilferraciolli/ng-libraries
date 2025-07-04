import { NgIf } from '@angular/common';
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { StarRatingComponent } from '../../../wt-components/src/lib/components/star-rating/star-rating.component';
import { LoaderCardComponent } from '../../../wt-loaders/src/lib/components/loader-card/loader-card.component';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Create a wrapper component that uses both library components
@Component({
  selector: 'story-wrapper',
  template: `
    <div style="padding: 20px;">
      <wt-loader-card
        [circleCount]="circleCount"
        *ngIf="loading"
      ></wt-loader-card>
      <div *ngIf="!loading">
        <h3>Content Loaded</h3>
        <wt-star-rating></wt-star-rating>
      </div>
    </div>
  `,
  standalone: true,
  imports: [LoaderCardComponent, StarRatingComponent, NgIf]
})
class StoryCombinationComponent {
  loading = true;
  circleCount = 2;
  buttonText = 'Reload';
  buttonColor = 'primary';
  buttonDisabled = false;

  toggleLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}

export default {
  title: 'Combinations/LoaderWithButton',
  component: StoryCombinationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatCardModule,
        NgxSkeletonLoaderModule,
        BrowserAnimationsModule,
        LoaderCardComponent,
        StarRatingComponent
      ]
    })
  ],
  argTypes: {
    circleCount: { control: 'number' },
    buttonText: { control: 'text' },
    buttonColor: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger']
    },
    buttonDisabled: { control: 'boolean' }
  }
} as Meta<StoryCombinationComponent>;

export const Default: StoryObj<StoryCombinationComponent> = {
  args: {
    circleCount: 2,
    buttonText: 'Reload',
    buttonColor: 'primary',
    buttonDisabled: false
  }
};
