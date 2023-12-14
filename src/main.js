// import 'ant-design-vue/dist/antd.css';

import Antd from 'ant-design-vue';
import App from './App.vue';
import GlobalComponent from './assets/Mocks/GlobalComponent.vue';
import { createApp } from 'vue';

const app = createApp(App);

// Register Global Component
app.component('global-component', GlobalComponent);

// Use Ant Design Vue
app.use(Antd);

// Mount the app
app.mount('#app');
