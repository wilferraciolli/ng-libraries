import { Meta, StoryObj } from '@storybook/angular';

import { moduleMetadata } from '@storybook/angular';
import { WtComponentsComponent } from './wt-components.component';

export default {
  title: 'WtComponents/Button',
  component: WtComponentsComponent,
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
} as Meta<WtComponentsComponent>;

// Primary button story
export const Primary: StoryObj<WtComponentsComponent> = {
  args: {
    text: 'Primary Button',
    color: 'primary',
    disabled: false
  }
};

// Secondary button story
export const Secondary: StoryObj<WtComponentsComponent> = {
  args: {
    text: 'Secondary Button',
    color: 'secondary',
    disabled: false
  }
};

// Disabled button story
export const Disabled: StoryObj<WtComponentsComponent> = {
  args: {
    text: 'Disabled Button',
    color: 'primary',
    disabled: true
  }
};
