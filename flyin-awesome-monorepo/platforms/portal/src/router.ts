import {createRouter, createWebHistory} from 'vue-router';

// 【核心】使用动态导入语法引入其他模块的组件
// Vite 在构建时会将这些依赖一起打包进来
const routes = [
    {
        path: '/',
        redirect: '/js' // 默认重定向到JS模块
    },
    {
        path: '/js',
        name: 'JS Module',
        // 这是编译时集成！最终会打包进同一个chunk。
        component: () => import('vue-js-app/src/views/Home.vue')
    },
    {
        path: '/ts',
        name: 'TS Module',
        component: () => import('vue-ts-app/src/views/Home.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});