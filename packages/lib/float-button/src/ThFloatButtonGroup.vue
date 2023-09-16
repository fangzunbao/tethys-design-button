<script lang="ts">
export default { name: 'ThFloatButtonGroup' }
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue'

const open = ref(false)

defineProps({
  type: {
    type: String,
    default: () => 'default',
    validator: (value: string) => ['primary', 'default'].includes(value),
  },
})
</script>

<template>
  <div class="th-float-btn-group">
    <Transition name="float">
      <div v-show="open" class="float-group-wrap">
        <slot></slot>
      </div>
    </Transition>
    <th-float-button :open="open" :type="type" @click="open = !open">
      <template #icon>
        <Close v-if="open" />
        <slot name="icon" v-else></slot>
      </template>
    </th-float-button>
  </div>
</template>
<style scoped lang="scss">
.th-float-btn-group {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  .float-group-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: -1;
    margin: 10px 0;
  }
}

.float-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.float-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.float-enter-active,
.float-leave-active {
  transition: all 0.6s;
}

.float-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.float-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
