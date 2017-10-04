import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../pages/HelloVuePage.vue';
import ExamplePage from '../pages/ExamplePage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:      '/',
            name:      'Hello',
            component: Hello
        },
        {
            path: '/examplePage',
            name: 'ExamplePage',
            component: ExamplePage
        },
    ]
});
