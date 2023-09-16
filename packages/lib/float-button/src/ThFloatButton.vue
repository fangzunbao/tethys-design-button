<script lang="ts">
export default { name: 'ThFloatButton' }
</script>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Setting, Close } from '@element-plus/icons-vue'

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
  open: {
    type: Boolean,
    default: () => false,
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

const toggerFloatButton = () => {
  floatButtonRef.value.classList.toggle('active')
}
</script>

<template>
  <div
    ref="floatButtonRef"
    :class="floatBtnClassName"
    :style="`position: ${
      props.position ? 'absolute' : 'static'
    }; border-radius: ${props.shape === 'round' ? '50%' : '6px'}`"
    @click="toggerFloatButton"
  >
    <div
      class="th-float-btn-icon"
      :style="`color: ${type === 'default' ? '#000000' : '#ffffff'}`"
    >
      <slot name="icon">
        <Close v-if="open" />
        <Setting v-else />
      </slot>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);

  .th-float-btn-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
