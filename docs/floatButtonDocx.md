---
outline: deep
---

<script setup>
import '../packages/style/index.scss'
</script>

# FloatButton 悬浮按钮

## 基础用法

使用 type 来定义悬浮按钮的样式。

:::demo

```vue
<template>
  <div class="button-type-wrapper">
    <th-float-button />
    <th-float-button type="primary" />
  </div>
</template>

<style>
.button-type-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
</style>
```

:::

# 按钮位置

使用 position 来定义悬浮按钮的位置。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <th-float-button position="bottom-right" type="primary" />
  </div>
</template>

<style>
.button-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
```

:::

# 按钮形状

使用 shape 来定义悬浮按钮的形状。

:::demo

```vue
<template>
  <th-float-button shape="square" type="primary" />
</template>
```

:::

## FloatButton API

### FloatButton Attributes

| 属性名     | <div style="width:60px">说明</div> | 属性值                                                                                                                            |   类型   |  默认值   |
| ---------- | :--------------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | :------: | :-------: |
| `type`     |           悬浮按钮的类型           | `default`、`primary`                                                                                                              | `string` | `default` |
| `position` |           悬浮按钮的位置           | `top-left`、`top-center`、`top-right`、`center-left`、`center`、`center-right`、`bottom-left`、`bottom-center`、`bottom-right'`、 | `string` |     -     |
| `shape`    |           悬浮按钮的形状           | `square`、`round`                                                                                                                 | `string` |  `round`  |
