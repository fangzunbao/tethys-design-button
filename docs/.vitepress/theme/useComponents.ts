import Components from '../../../packages'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.use(Components)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
