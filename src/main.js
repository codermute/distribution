import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import '@/utils/rem'
import 'vant/lib/index.css'
import 'normalize.css/normalize.css'
import '@/assets/css/base.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
