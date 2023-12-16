// import 'ant-design-vue/dist/antd.css';

import { createRouter, createWebHistory } from 'vue-router';

import AboutComp from './assets/Mocks/RouterExamples/AboutComp.vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import GlobalComponent from './assets/Mocks/GlobalComponent.vue';
import HomeComp from './assets/Mocks/RouterExamples/HomeComp.vue'
import ProductDetail from './assets/Mocks/RouterExamples/ProductDetail.vue'
import { createApp } from 'vue';

const app = createApp(App);


const routes = [
  { path: '/', component: HomeComp },
    { path: '/about', component: AboutComp },
   { path: '/product/:id', component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Register Global Component
app.component('global-component', GlobalComponent);

// Use Ant Design Vue
app.use(Antd);

// Use Vue Router
app.use(router);
// Mount the app
app.mount('#app');
