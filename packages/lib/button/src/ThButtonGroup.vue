<script lang="ts">
export default { name: 'ThButtonGroup' }
</script>

<script setup lang="ts">
import { nextTick } from 'vue'

const directionOptions: { [name: string]: string } = {
  horizontal: 'row',
  vertical: 'column',
}

const props = defineProps({
  direction: {
    type: String,
    default: () => 'horizontal',
    validator: (value: string) => {
      return ['horizontal', 'vertical'].includes(value)
    },
  },
  gutter: {
    type: [String, Number],
    default: () => 0 || '0px',
  },
  disabled: {
    type: Boolean,
  },
})

nextTick(() => {
  if (props.disabled) {
    const btns = document.getElementsByTagName('button')
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.add('disabled')
      btns[i].classList.remove('hover')
      btns[i].disabled = true
    }
  }
})
</script>

<template>
  <div class="th-button-group">
    <div
      class="horizontal-button-group"
      :style="`flex-direction: ${directionOptions[direction]}; gap: ${parseInt(
        gutter.toString(),
      )}px`"
      v-if="direction === 'horizontal'"
    >
      <slot></slot>
    </div>
    <div
      class="vertical-button-group"
      :style="`flex-direction: ${directionOptions[direction]}; gap: ${parseInt(
        gutter.toString(),
      )}px`"
      v-else
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scope lang="scss">
.th-button-group {
  .horizontal-button-group {
    display: flex;
    button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: var(--th-border-radius);
        border-bottom-left-radius: var(--th-border-radius);
        border-right-color: transparent;
      }
      &:last-child {
        border-top-right-radius: var(--th-border-radius);
        border-bottom-right-radius: var(--th-border-radius);
        border-left-color: transparent;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }
  .vertical-button-group {
    display: flex;
    button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: var(--th-border-radius);
        border-top-right-radius: var(--th-border-radius);
        border-bottom-color: transparent;
      }
      &:last-child {
        border-bottom-left-radius: var(--th-border-radius);
        border-bottom-right-radius: var(--th-border-radius);
        border-top-color: transparent;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>
