# WilTech libraries

Latest tutorial here `https://medium.com/@aleksanderkolata/how-to-develop-angular-libraries-locally-ed8e1fd16892`

To create libraries follow this tutorial
`https://angular.love/create-your-standalone-angular-library-in-10-minutes` and 
`https://angular.dev/tools/libraries/creating-libraries`

For more details you see this tutorial here `https://www.syncfusion.com/blogs/post/share-angular-components-across-projects?ref=dailydev`

Also a video tutorial here `https://www.youtube.com/watch?v=qNHdQqYfcKE`


* Create a workspace `ng new wiltech-libraries --no-create-application --prefix=wt`
* Create a library `ng generate library wt-loaders`

The command above will create a workspace called `wiltech-libraries` followed by a library called `user-store` inside the projects folder

To create components within each library, then navigate to the root of the library Eg `cd projects` and `cd user-store`

# Adding dependencies
Make sure that dependencies are added as `peerDependencies` as it will then allow the client to pick up the version and avoid duplication 
to make sure it is added to the library and avoid issues as only peerDependencies are bundled together and dependencies is just for dev
Always make sure to install dependencies using the `--save-dev` flag to make sure it is added as peerDependency

# building and publishing
To be able to do that, build, navigate to the dist folder and publish it from there, NPM will ask you to login
`ng build wt-loaders`
`cd dist/wt-loaders` 
`npm publish`


## For dev mode, we can build using the `--watch` mode, this will allow development as the same time to reload any changes on the fly 
Eg `ng build wt-loaders --watch`

## Notes
When importing within the libraries, it must be relative (full path) the import otherwise when we build it will not be able to find the files

# Install the library locally via npm
This step shows how to manually install the library onto a client, not ideal as each change it will require a new install

### Step 1 (library)
within the libraries main root folder, run the library in watch mode `ng build wt-loaders --configuration development --watch`

### step 2 (another app using the library)
within the client app install by passing the absolute path of the dit folder to the library Eg for the wt-loaders library it will be
`npm i "C:\DEV\GIT\WILTECH\ng-libraries\wt-libraries\dist\wt-loaders"` Note that each time a change is made, it would still require to re-install the library

# Link library for local dev
Link uses symlink to point the local npm registry to look at the library in your local machine rather than the published version, this allows debugin and watch mode.
For it to work, we need to run the library within the DIST folder.
PS when there are dependencies, then it may not work  unless if we use Typescript mapping within the tsconfig file.

### Step 1 (library)
within the libraries main root folder, run the library in watch mode `ng build wt-loaders --configuration development --watch`
* run `cd dist/wt-loaders`
* then `npm link`

The command above should say in the console something 
```angular2html
added 1 package, and audited 3 packages in 2s
```

### step 2 (another app using the library)
* Within the app you want to link with the library
go to the angular.json and add `"preserveSymlinks": true,` within the architect.build.options object
* run `npm link wt-loaders`

The command above should say the console
```angular2html
added 1 package, and audited 983 packages in 4s
```
* finally run `ng serve` and it should work

Tidy up - in order to tidy up, run `npm unlink wt-loaders` within the client app to close the link
and within the library run `npm rm -g wt-loaders` to remove the link created


# Dependencies
## Storybook - ADD to the parent and not to each library
Allow seeing components wne their customization (Run the command on the parent folder, the cli will ask which project to add the storuybook)
`npx storybook@latest init`
To run Storybook manually, run `ng run wt-loaders:storybook`
To build Storybook manually, run `ng run wt-loaders:build-storybook`
                                                                                 │
   Wanna know more about Storybook? Check out https://storybook.js.org/          │
   Having trouble or want to chat? Join us at https://discord.gg/storybook/

## Prettier (Optional)
This prettier adds a git commit hook to format the code as we commit changes
`ng add @schuchard/prettier`
Run `npm run prettier` to format the code 

## Linting (Optional)
 Run this command to add the schematic
`ng add @angular-eslint/schematics`

 Add lint configuration for my-library
`ng g @angular-eslint/schematics:add-eslint-to-project my-library`

 Add lint configuration for my-library-web-components
`ng g @angular-eslint/schematics:add-eslint-to-project my-library-web-components`
