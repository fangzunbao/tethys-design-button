<script lang="ts">
export default { name: 'ThSubmitButton' }
</script>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: () => '',
  },
})

const btnStyle = ref({
  '--th-submit-btn-color': props.color,
})
</script>

<template>
  <div>
    <button class="th-submit-button" :style="btnStyle">
      <slot></slot>
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.th-submit-button {
  background: var(--th-submit-btn-color);
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em var(--th-submit-btn-color);
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em var(--th-submit-btn-color);
    right: 0.3em;
    transition: all 0.3s;
    svg {
      width: 1.1em;
      transition: transform 0.3s;
      color: var(--th-submit-btn-color);
    }
  }
  &:hover {
    .icon {
      width: calc(100% - 0.6em);
    }
    svg {
      transform: translateX(0.1em);
    }
  }
  &:active {
    .icon {
      transform: scale(0.95);
    }
  }
}
</style>
