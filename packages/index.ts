import type { App, Component } from 'vue'
import './style/index.scss'
import ThButton from '@/lib/button/src/index.vue'

const components: { [name: string]: Component } = {
  ThButton,
}

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
