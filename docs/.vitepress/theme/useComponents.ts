import ThButton from '../../../packages/lib/button/src/index.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('ThButton', ThButton)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
