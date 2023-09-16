import type { App, Component } from 'vue'
import './style/index.scss'
import ThButton from '@/lib/button/src/ThButton.vue'
import ThButtonGroup from './lib/button/src/ThButtonGroup.vue'
import ThParticleButton from './lib/animate-button/src/ThParticleButton.vue'
import ThSubmitButton from './lib/animate-button/src/ThSubmitButton.vue'
import ThOperateButton from './lib/animate-button/src/ThOperateButton.vue'
import ThFloatButton from './lib/float-button/src/ThFloatButton.vue'
import ThFloatButtonGroup from './lib/float-button/src/ThFloatButtonGroup.vue'

const components: { [name: string]: Component } = {
  ThButton,
  ThButtonGroup,
  ThParticleButton,
  ThSubmitButton,
  ThOperateButton,
  ThFloatButton,
  ThFloatButtonGroup,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
