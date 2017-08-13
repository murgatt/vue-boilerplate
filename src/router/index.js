import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ExamplePage from '@/pages/ExamplePage';

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
