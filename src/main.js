import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import '@/utils/rem'
import 'normalize.css/normalize.css'
import '@/assets/css/base.css'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
