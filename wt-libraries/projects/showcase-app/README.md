# Show case app to test libraries
This is a simple project to test libraries;

# Making the showcase app and libraries to work together during developtmen
In order to allow quick development, run the library that you want to see in the showcase in watch mode so changes to the library will apply to the app components
Eg for testing the wt-loaders library, simply navigate to the project folder `cd wt-loaders` and run
```bash
   ng build wt-loaders --watch
``````

Then within the showcase app, you can simply import components from the library. Make sure that the peer dependencies are added to the showcase app
