import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/bootstrap.css'

import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
