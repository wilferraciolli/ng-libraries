import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderCardComponent } from 'wt-loaders';

export default {
  title: 'WtLoaders/LoaderCard',
  component: LoaderCardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, NgxSkeletonLoaderModule, BrowserAnimationsModule]
      // declarations: [LoaderCardComponent],
      // providers: [],
      // schemas: [],
      // entryComponents: [],
    })
  ],
  argTypes: {
    circleCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of skeleton loaders to display'
    }
  }
} as Meta<LoaderCardComponent>;

// Default story
export const Default: StoryObj<LoaderCardComponent> = {
  args: {
    circleCount: 1
  }
};

// Multiple circles story
export const MultipleSkeleton: StoryObj<LoaderCardComponent> = {
  args: {
    circleCount: 3
  }
};
