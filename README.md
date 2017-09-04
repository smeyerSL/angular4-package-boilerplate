# Angular 4 NPM package boilerplate (WIP)

## Publish
To publish this package first run **npm run build** and then cd to the /dist directory and run **npm publish**
If you want to publish to your own repositiory and not the npm default add the following to the package.json: <br>
```
"publishConfig": {
    "registry": "THE URL TO YOUR NPM REPOSITORY"
},
```
Don't forget to bump the version (also in package.json in the dist folder).

## Add new external dependencies
If you need to add more external dependencies the package needs to be added at two places besides the package.json. Let's say we want to add **@angular/http**. First you would have to extend the paths object in **tsconfig.json** like this
```
"paths": {
  ...
  "@angular/http": ["node_modules/@angular/http"],
  ...
},
```
and second you have to add the module name to the globals object in **rollup.config.js**
```
globals: {
    ...
    '@angular/http': 'ng.http',
    ...
}
```
## Credits
Thanks to Cyrille Tuzi (@cyrilletuzi) for [his tutorial at medium.com](https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464)