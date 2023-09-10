<script lang="ts">
export default { name: 'ThFloatButton' }
</script>
<script setup lang="ts">
import { computed, ref } from 'vue'

const floatButtonRef = ref()

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
  shape: {
    type: String,
    default: () => 'round',
    validator: (value: string) => ['round', 'square'].includes(value),
  },
  type: {
    type: String,
    default: () => 'default',
    validator: (value: string) => ['primary', 'default'].includes(value),
  },
})

const position = computed((): string => props.position || '')
const type = computed((): string => props.type || 'default')

// 自定义类名
const floatBtnClassName = ref({
  'th-float-button': true,
  [type.value]: true,
  [position.value]: true,
  [props.shape]: true,
})

// 自定义样式
const floatbtnStyle = ref({
  'border-radius': props.shape === 'round' ? '50%' : '6px',
  ['position']: props.position ? 'fixed' : 'static',
})

const toggerFloatButton = () => {
  floatButtonRef.value.classList.toggle('active')
}
</script>

<template>
  <div
    ref="floatButtonRef"
    :class="floatBtnClassName"
    :style="floatbtnStyle"
    @click="toggerFloatButton"
  >
    <div class="th-float-btn-detault-icon"></div>
  </div>
</template>

<style scoped lang="scss">
@use './styles/position.scss' as *;
@use './styles/type.scss' as *;
body {
  position: relative;
}
.th-float-button {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  .th-float-btn-detault-icon {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.2s;
    &::before {
      display: inline-block;
      content: '';
      width: 20px;
      height: 2px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      display: inline-block;
      content: '';
      width: 2px;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.active {
  .th-float-btn-detault-icon {
    transform: rotate(45deg);
  }
}
</style>
