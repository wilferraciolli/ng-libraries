# Show case app to test libraries
This is a simple project to test libraries;

# Making the showcase app and libraries to work together during developtmen
In order to allow quick development, run the library that you want to see in the showcase in watch mode so changes to the library will apply to the app components
Eg for testing the wt-loaders library, simply navigate to the project folder `cd wt-loaders` and run
```bash
   ng build wt-loaders --watch
``````

Then within the showcase app, you can simply import components from the library. Make sure that the peer dependencies are added to the showcase app


## Configuring to be able to get stories from every project
Within the `main.ts` file make sure to add the projects to it Eg
```json
module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../wt-loaders/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../wt-components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  }
...
};
```

Then update the `preview.ts` file to handle global imports
```ts
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

// Import global styles if needed
import '../src/styles.scss';

// Decorator for Angular Material
export const decorators = [
  moduleMetadata({
    imports: [BrowserAnimationsModule],
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

```

Then update each library `tsconfig.lob.json` file to explicity include stories files
```ts
{
  "extends": "../../tsconfig.json",
    "compilerOptions": {
    "outDir": "../../out-tsc/lib",
      "declaration": true,
      "declarationMap": true,
      "inlineSources": true,
      "types": []
  },
  "exclude": [
    "**/*.spec.ts"
  ],
    "include": [
    "src/**/*.ts",
    "src/**/*.stories.ts"
  ]
}
```
