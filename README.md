# vue-boilerplate

A simple Vue.js boilerplate with awesome tools based on the [VueJS Webpack template](https://github.com/vuejs-templates/webpack).  
This boilerplate includes a full-featured Webpack + vue-loader setup with hot reload and css extraction.

## Installation
Simply clone or download this repository then `npm install`.

## Tools

### Vue Router
This boilerplate comes with [vue-router](https://router.vuejs.org/), a simple route system based on vue components. Routes can be defined inside `src/router/index.js`:
```javascript
import PageComponent from '../pages/MyPage';
export default new Router({
    routes: [
        ...
        {
            path:      '/pathToYourPage',
            name:      'PageName',
            component: PageComponent
        },
        ...
    ]
});
```
In order to separate "pages" components from "basic" components, "pages" components files are created in the `src/pages` folder.

### Vuex
> Vuex is a state management pattern + library for Vue.js applications.

You can read the official documentation [here](https://vuex.vuejs.org/).


### [webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith) 
> Webpack plugin that converts set of images into a spritesheet and SASS/LESS/Stylus mixins, using [spritesmith](https://github.com/Ensighten/spritesmith) and [spritesheet-templates](https://github.com/twolfson/spritesheet-templates)

You can simply put your images inside the `src/sprites/images` folder. 
When you run webpack, the plugin generates two files inside `src/sprites/generated` by default: a spritesheet and a SASS/LESS mixins file (default: LESS). 
You can then import and use the mixins into your components.
With the default generated mixins, a value can be passed to specify the ratio of the icon to display (for retina screens for example). The default value is 1.
```less
@import "../sprites/generated/sprite";
.icon {
	.sprite-name-of-the-icon-file(.5);
}
```  
In this boilerplate, the plugin use a custom template file to generate mixins. 
There are two templates available (a LESS and a SASS template) inside the `build/templates` folder, you can add your own template.
You can configure the plugins and the templates wanted inside `build/webpack.base.conf.js`.

### Image minification
Based on [imagemin](https://github.com/imagemin/imagemin), [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) is included to this boilerplate to minify PNG, JPEG, GIF and SVG images.
You can configure your minification preferences inside `build/webpack.base.conf.js`.
```javascript
// Default options
options: {
    bypassOnDebug: true,
    svgo: {
        enabled: false,
    },
    gifsicle: {
        enabled: false,
    },
    mozjpeg: {
        enabled: true,
        quality: 70,
    },
    optipng: {
        enabled: true,
        optimizationLevel: 7,
        interlaced: false,
    },
}
```

### LESS / SASS
By default, the boilerplate is configured to use LESS but you can use SASS. Just install [node-sass](https://github.com/sass/node-sass) and [sass-loader](https://github.com/webpack-contrib/sass-loader).
```
npm install sass-loader node-sass --save-dev
```

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
