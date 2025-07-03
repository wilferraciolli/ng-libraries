# WilTech libraries


To create libraries follow this tutorial
`https://angular.dev/tools/libraries/creating-libraries`

For more details you see this tutorial here `https://www.syncfusion.com/blogs/post/share-angular-components-across-projects?ref=dailydev`


* Create a workspace `ng new wiltech-libraries --no-create-application`
* Create a library `ng generate library user-store`
* Create a showcase app to test `ng generate application showcase-app`

The command above will create a workspace called `wt-libraries` followed by a library called `user-store` inside the projects folder

To create components within each library, then navigate to the root of the library Eg `cd projects` and `cd user-store`


# Making the showcase app and libraries to work together during developtmen
In order to allow quick development, run the library that you want to see in the showcase in watch mode so changes to the library will apply to the app components
Eg for testing the wt-loaders library, simply navigate to the project folder `cd wt-loaders` and run 
```bash
   ng build wt-loaders --watch
``````

Then within the showcase app, you can simply import components from the library. Make sure that the peer dependencies are added to the showcase app


