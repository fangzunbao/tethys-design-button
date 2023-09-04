import { createApp } from 'vue'
import './reset.scss'
import components from '../packages/index'
import App from './App.vue'

const app = createApp(App)
app.use(components)
app.mount('#app')
