import Routing from './index.vue'

export const routes = [
    {path: '/', component: () => import('./package-list')},
]

export { Routing }