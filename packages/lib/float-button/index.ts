import type { App } from 'vue'
import ThFloatButton from './src/ThFloatButton.vue'

export default {
  install(app: App) {
    app.component(ThFloatButton.name, ThFloatButton)
  },
}
