import type { App } from 'vue'
import ThParticleButton from './src/ThParticleButton.vue'

export default {
  install(app: App) {
    app.component(ThParticleButton.name, ThParticleButton)
  },
}
