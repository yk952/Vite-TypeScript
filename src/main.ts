import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// 使用环境变量设置标题
document.title = import.meta.env.VITE_APP_TITLE || "My App"
app.mount('#app')
