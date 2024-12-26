import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保导入了 router
import './assets/css/iconfont.css'

// 创建应用实例
const app = createApp(App);

// 使用 router
app.use(router);

// 挂载应用
app.mount('#app');
