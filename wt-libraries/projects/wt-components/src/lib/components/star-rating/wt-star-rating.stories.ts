import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';
import { StarRatingComponent } from './star-rating.component';

export default {
  title: 'WtComponents/StarRating',
  component: StarRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Add any necessary imports for your button component
      ]
    })
  ],
  argTypes: {
    // Define controls for your component's inputs
    text: {
      control: 'text',
      description: 'Button text'
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'warning', 'danger']
      },
      description: 'Button color variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    }
  }
} as Meta<StarRatingComponent>;

// Primary story
export const Primary: StoryObj<StarRatingComponent> = {
  args: {
    rating: 1,
    color: 'primary'
  }
};

// Accent story
export const Secondary: StoryObj<StarRatingComponent> = {
  args: {
    rating: 2,
    color: 'accent'
  }
};

// Warn story
export const Disabled: StoryObj<StarRatingComponent> = {
  args: {
    rating: 3,
    color: 'warn'
  }
};
