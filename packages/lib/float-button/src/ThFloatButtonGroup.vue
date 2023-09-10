<script lang="ts">
export default { name: 'ThFloatButtonGroup' }
</script>
<script setup lang="ts">
import { computed, ref } from 'vue'

const floatButtonGroupRef = ref()

const props = defineProps({
  position: {
    type: String,
    defailt: () => '',
    validator: (value: string) =>
      [
        '',
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ].includes(value),
  },
  type: {
    type: String,
    default: () => 'default',
    validator: (value: string) => ['primary', 'default'].includes(value),
  },
})

// const type = computed((): string => props.type || 'default')
// const position = computed((): string => props.position || '')

// 自定义类名
// const floatBtnClassName = ref({
//   'th-float-button-group': true,
//   [type.value]: true,
//   [position.value]: true,
// })

const toggleFloatBtngGroup = () => {
  floatButtonGroupRef.value.classList.toggle('active')
}
</script>

<template>
  <div class="th-float-button-group">
    <div
      ref="floatButtonGroupRef"
      class="th-float-button-group__body"
      @click="toggleFloatBtngGroup"
    >
      <div class="th-float-button-group-icon"></div>
      <div class="th-float-button-group-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
// @use './styles/position.scss' as *;
// @use './styles/type.scss' as *;

.th-float-button-group {
  position: fixed;
  bottom: 20px;
  right: 20px;
  .th-float-button-group__body {
    position: relative;
    .th-float-button-group-icon {
      width: 40px;
      height: 40px;
      background-color: red;
      cursor: pointer;
    }
    .th-float-button-group-slot {
      position: absolute;
      left: 0;
      top: -120px;
      width: 100%;
      height: 0;
      overflow: hidden;
      background-color: #fff;
      transition: all 0.2s;
      transform-origin: 50% 100%;
      display: flex;
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
  .active {
    .th-float-button-group-slot {
      height: 100px;
    }
  }
}
</style>
