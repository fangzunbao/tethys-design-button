import type { App, Component } from 'vue'
import './style/index.scss'
import ThButton from '@/lib/button/src/ThButton.vue'
import ThButtonGroup from './lib/button/src/ThButtonGroup.vue'
import ThAnimateButton from './lib/animate-button/src/index.vue'
import ThFloatButton from './lib/float-button/src/ThFloatButton.vue'
import ThFloatButtonGroup from './lib/float-button/src/ThFloatButtonGroup.vue'

const components: { [name: string]: Component } = {
  ThButton,
  ThButtonGroup,
  ThAnimateButton,
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
