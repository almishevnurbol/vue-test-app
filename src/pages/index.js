import Routing from './index.vue'

export const routes = [
    {path: '/', component: () => import('./package-list')},
    {path: '/detail', component: () => import('./package-detail')},
];

export { Routing }