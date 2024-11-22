# WilTech libraries


To create libraries follow this tutorial
`https://angular.dev/tools/libraries/creating-libraries`

For more details you see this tutorial here `https://www.syncfusion.com/blogs/post/share-angular-components-across-projects?ref=dailydev`

Also a vider tutorial here `https://www.youtube.com/watch?v=qNHdQqYfcKE`


* Create a workspace `ng new wiltech-libraries --no-create-application`
* Create a library `ng generate library wt-loaders`

The command above will create a workspace called `eiltech-libraries` followed by a library called `user-store` inside the projects folder

To create components within each library, then navigate to the root of the library Eg `cd projects` and `cd user-store`

# Adding dependencies
Make sure that dependencies are added as peerDependencies AND dev dependencies at the same time
to make sure it is added to the library and avoid issues as only peerDependencies are bundled together and dependencies is just for dev

# building and publishing
To be able to do that, build, navigate to the dist folder and publish it from there, NPM will ask you to login
`ng build wt-loaders`
`cd dist/wt-loaders` 
`npm publish`


## For dev mode, we can build using the `--watch` mode, this will allow development as the same time to reload any changes on the fly 
Eg ng build wt-loaders --watch

## Notes
When importing within the libraries, it must be explicity the import otherwise when we build it will not be able to find the files
