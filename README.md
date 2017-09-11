# vue-boilerplate

A simple Vue.js boilerplate with awesome tools.

## Tools

### Vue Router
This boilerplate comes with [vue-router](https://router.vuejs.org/), a simple route system based on vue components. Routes can be defined inside `src/router/index.js`:
```javascript
import PageComponent from '@/pages/MyPage';
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
