import type { App } from 'vue'
import ThAnimateButton from './src/index.vue'

export default {
  install(app: App) {
    app.component(ThAnimateButton.name, ThAnimateButton)
  },
}
