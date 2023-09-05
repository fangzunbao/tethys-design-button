import type { App, Component } from 'vue'
import './style/index.scss'
import ThButton from '@/lib/button/src/ThButton.vue'
import ThButtonGroup from './lib/button/src/ThButtonGroup.vue'

const components: { [name: string]: Component } = {
  ThButton,
  ThButtonGroup,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
