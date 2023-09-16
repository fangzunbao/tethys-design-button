---
outline: deep
---

<script setup>
import '../packages/style/index.scss'
</script>

# FloatButtonGroup 悬浮按钮组

## 基础用法

悬浮按钮组的固定位置为右下角, **点击**后会弹出其他按钮组

通过 `type` 属性控制悬浮按钮组主题，与普通悬浮按钮一样

:::demo

```vue
<template>
  <div class="group-button-type-wrapper">
    <th-float-button-group type="primary">
      <th-float-button type="primary" shape="square" />
      <th-float-button type="primary" shape="square" />
    </th-float-button-group>
  </div>
</template>

<style>
.group-button-type-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
```

:::

## 自定义按钮

默认采用 `element-plus/icons` 中的图标，也可以自定义图标

使用 `icon` 插槽来设置图标

:::demo

```vue
<template>
  <div class="button-type-wrapper">
    <th-float-button-group type="primary">
      <th-float-button type="primary" shape="square" />
      <template #icon>
        <SwitchButton />
      </template>
    </th-float-button-group>
  </div>
</template>

<script setup lang="ts">
import { SwitchButton } from '@element-plus/icons-vue'
</script>
<style>
.button-type-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
```

:::

## FloatButtonGroup API

### FloatButtonGroup Attributes

| 属性名 | <div style="width:60px">说明</div> | 属性值               |   类型   |  默认值   |
| ------ | :--------------------------------: | -------------------- | :------: | :-------: |
| `type` |           悬浮按钮的类型           | `default`、`primary` | `string` | `default` |

### FloatButtonGroup Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |
| `icon`    | 自定义图标     |
