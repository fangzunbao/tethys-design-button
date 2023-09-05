<script lang="ts">
export default { name: 'ThButton' }
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getDarkColor, getLightColor } from './constant'

const props = defineProps({
  type: {
    type: String,
    default: () => 'primary',
    validator: (value: string) => {
      return [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'help',
      ].includes(value)
    },
  },
  shape: {
    type: String,
    default: () => 'square',
    validator: (value: string) => {
      return ['square', 'round', 'circle'].includes(value)
    },
  },
  size: {
    type: String,
    default: () => 'medium',
    validator: (value: string) => {
      return ['mini', 'small', 'medium', 'large'].includes(value)
    },
  },
  mimicry: {
    type: String,
    default: () => '',
    validator: (value: string) => {
      return ['', 'convex', 'concave'].includes(value)
    },
  },
  plain: {
    type: Boolean,
  },
  text: {
    type: Boolean,
  },
  link: {
    type: Boolean,
  },
  block: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  color: {
    type: String,
    default: () => '',
  },
})

const btnType = computed(() => `th-${props.type}-btn`)

const btnStyle = ref({
  '--th-primary-color': props.color,
  '--th-primary-hover-color': getDarkColor(props.color.toUpperCase(), 0.1),
  '--th-primary-light-color': getLightColor(props.color.toUpperCase(), 0.95),
  '--th-primary-shadow-color': getLightColor(props.color.toUpperCase(), 0.6),
  '--th-primary-disable-color': getLightColor(props.color.toUpperCase(), 0.5),
})

const buttonClass = ref({
  hover: !props.disabled && !props.loading,
  [btnType.value]: props.mimicry ? false : true,
  [props.shape]: true,
  [props.size]: true,
  [props.mimicry]: props.mimicry ? true : false,
  plain: props.plain,
  text: props.text,
  link: props.link,
  block: props.block,
  disabled: props.disabled || props.loading,
  loading: props.loading,
})
</script>

<template>
  <button
    type="button"
    :class="buttonClass"
    :disabled="disabled || loading"
    :style="btnStyle"
  >
    <span class="th-btn-loading" v-if="loading">
      <img src="./assets/loading.svg" alt="loading" style="width: 16px" />
    </span>
    <span class="th-btn-label">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use './styles/type.scss' as *;
@use './styles/plain.scss' as *;
@use './styles/text.scss' as *;
@use './styles/link.scss' as *;
@use './styles/shape.scss' as *;
@use './styles/size.scss' as *;
@use './styles/mimicry.scss' as *;
@use './styles/block.scss' as *;
@use './styles/disabled.scss' as *;
@use './styles/loading.scss' as *;
</style>
