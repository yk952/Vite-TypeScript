import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue' 
import '@arco-design/web-vue/dist/arco.css' 
import router from './router' 

const app = createApp(App)
// 使用环境变量设置标题
document.title = import.meta.env.VITE_APP_TITLE || "My App"
app.use(ArcoVue) 
app.use(router)
app.mount('#app')
