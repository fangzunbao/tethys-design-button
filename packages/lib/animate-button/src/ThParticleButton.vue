<script lang="ts">
export default { name: 'ThParticleButton' }
</script>
<script setup lang="ts">
import { ref } from 'vue'
const buttonRef = ref()
const timer = ref()

const props = defineProps({
  color: {
    type: String,
    default: () => '',
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
})

const btnStyle = ref({
  '--th-animate-btn-color': props.color,
  width: props.width + 'px',
  height: props.height + 'px',
})

// 点击按钮后触发动画
const handleClick = () => {
  if (timer.value) clearTimeout(timer.value)
  buttonRef.value.classList.add('animate')
  timer.value = setTimeout(() => {
    buttonRef.value.classList.remove('animate')
  }, 400)
}
</script>

<template>
  <div>
    <button
      class="button"
      ref="buttonRef"
      :style="btnStyle"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  padding: 10px 22px;
  background-color: var(--th-animate-btn-color);
  border-radius: 6px;
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.96);
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 150%;
    z-index: -1;
    background-repeat: no-repeat;
  }
  &.animate::before {
    top: -70%;
    background-image: radial-gradient(
        circle,
        var(--th-animate-btn-color) 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        var(--th-animate-btn-color) 20%,
        transparent 30%
      ),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        var(--th-animate-btn-color) 15%,
        transparent 20%
      ),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%);
    background-size:
      10% 10%,
      20% 20%,
      15% 20%,
      20% 20%,
      18% 18%,
      10% 10%,
      15% 15%,
      28% 18%;
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
    animation: topBubbles 0.4s ease-in-out infinite;
  }
  &.animate::after {
    bottom: -70%;
    background-image: radial-gradient(
        circle,
        var(--th-animate-btn-color) 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 10%,
        var(--th-animate-btn-color) 15%,
        transparent 20%
      ),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%),
      radial-gradient(circle, var(--th-animate-btn-color) 20%, transparent 20%);
    background-size:
      15% 15%,
      20% 20%,
      18% 18%,
      20% 20%,
      15% 15%,
      20% 20%,
      18% 18%;
    background-position:
      10% 0%,
      30% 10%,
      55% 0%,
      70% 0%,
      85% 0%,
      70% 0%,
      70% 0%;
    animation: bottomBubbles 0.4s ease-in-out forwards;
  }
}
</style>
