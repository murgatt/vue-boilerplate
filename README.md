# vue-boilerplate

A simple Vue.js boilerplate with awesome tools.

## Tools

### Vue Router
This boilerplate comes with [vue-router](https://router.vuejs.org/), a simple route system based on vue components. Routes can be defined inside `src/router/index.js` :
```javascript
import MyPageComponent from '@/pages/MyPage';
export default new Router({
    routes: [
        ...
        {
            path:      '/pathToYourPage',
            name:      'PageName',
            component: MyPageComponent
        },
        ...
    ]
});
```
In order to separate "pages" components from "basic" components, "pages" components files are created in the `src/pages` folder.


### [webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith) 
> Webpack plugin that converts set of images into a spritesheet and SASS/LESS/Stylus mixins, using [spritesmith](https://github.com/Ensighten/spritesmith) and [spritesheet-templates](https://github.com/twolfson/spritesheet-templates)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
