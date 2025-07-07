import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../wt-loaders/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../wt-components/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../wt-core/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  }
};
export default config;
