import type { App } from 'vue'
import ThButton from './src/index.vue'

export default {
  install(app: App) {
    app.component(ThButton.name, ThButton)
  },
}
