---
outline: deep
---

<script setup>
import '../packages/style/index.scss'
</script>

# Button Animate 按钮

常用的一些动画按钮

## 按钮点击放射粒子

点击按钮时会放射粒子，可以通过 `color` 控制按钮以及粒子颜色

通过 `width`、`height` 控制按钮大小

:::demo

```vue
<template>
  <div class="animate-container">
    <th-animate-button>点击动画按钮</th-animate-button>
    <th-animate-button color="#0984e3">点击动画按钮</th-animate-button>
  </div>
</template>

<style>
.animate-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  gap: 20px;
}
</style>
```

:::

## ButtonAnimate API

### ButtonAnimate Attributes

| 属性名 | <div style="width:60px">说明</div> | 属性值 |      类型       |  默认值   |
| ------ | :--------------------------------: | ------ | :-------------: | :-------: |
| color  |              按钮颜色              | -      |    `string`     | `#7d2ae8` |
| width  |              按钮宽度              | -      | `string/number` |     -     |
| height |              按钮高度              | -      | `string/number` |     -     |

### ButtonAnimate Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |
