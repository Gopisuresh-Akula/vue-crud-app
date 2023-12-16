// import 'ant-design-vue/dist/antd.css';

import { createRouter, createWebHistory } from 'vue-router';

import AboutComp from './assets/Mocks/RouterExamples/AboutComp.vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import GlobalComponent from './assets/Mocks/GlobalComponent.vue';
import HomeComp from './assets/Mocks/RouterExamples/HomeComp.vue'
import NotFoundPage from './assets/Mocks/RouterExamples/NotFoundPage.vue'
import ProductDetail from './assets/Mocks/RouterExamples/ProductDetail.vue'
import UserInfo from './assets/Mocks/RouterExamples/Nested Routes/UserInfo.vue'
import UserProfile from './assets/Mocks/RouterExamples/Nested Routes/UserProfile.vue'
import { createApp } from 'vue';

const app = createApp(App);


const routes = [
      { 
    path: '/:catchAll(.*)', 
    component: NotFoundPage 
  },

  { path: '/', component: HomeComp },
    { path: '/about', name: "about", component: AboutComp },
    { path: '/product/:id', name:'product', component: ProductDetail },
    { path: '/:catchAll(.*)', component: NotFoundPage },
      {
    path: '/user',
    component: UserInfo,
    children: [
      { path: 'profile', component: UserProfile },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// main.js
// router.beforeEach((to, from, next) => {
//   // Check authentication status
//   const isAuthenticated = false; //getAuthStatus

//   if (to.name !== 'Login' && !isAuthenticated) {
//     next({ name: 'Login' });
//   } else {
//     next();
//   }
// });

// Register Global Component
app.component('global-component', GlobalComponent);

// Use Ant Design Vue
app.use(Antd);

// Use Vue Router
app.use(router);
// Mount the app
app.mount('#app');
