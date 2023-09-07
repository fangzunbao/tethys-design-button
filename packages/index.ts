import type { App, Component } from 'vue'
import './style/index.scss'
import ThButton from '@/lib/button/src/ThButton.vue'
import ThButtonGroup from './lib/button/src/ThButtonGroup.vue'
import ThAnimateButton from './lib/animate-button/src/index.vue'

const components: { [name: string]: Component } = {
  ThButton,
  ThButtonGroup,
  ThAnimateButton,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
