---
outline: deep
---

<script setup>
import '../packages/style/index.scss'
</script>

# ButtonGroup 按钮组

## 基础用法

使用 `th-button-group` 实现按钮组，在默认插槽中添加所需要的按钮组件。

:::demo

```vue
<template>
  <th-button-group>
    <th-button>Primary</th-button>
    <th-button type="success">Success</th-button>
    <th-button type="info">Info</th-button>
    <th-button type="warning">Warning</th-button>
    <th-button type="danger">Danger</th-button>
    <th-button type="help">Help</th-button>
  </th-button-group>
</template>
```

:::

## 方向选择

使用 `direction` 属性确定按钮组的方向，默认为水平方向，可以设置 `vertical` 来使按钮组垂直方向。

:::demo

```vue
<template>
  <div style="width:80px">
    <th-button-group direction="vertical">
      <th-button>Primary</th-button>
      <th-button type="success">Success</th-button>
      <th-button type="info">Info</th-button>
      <th-button type="warning">Warning</th-button>
      <th-button type="danger">Danger</th-button>
      <th-button type="help">Help</th-button>
    </th-button-group>
  </div>
</template>
```

:::

## 按钮间距

使用 `gutter` 属性来设置按钮组中各个按钮的间隔。

:::demo

```vue
<template>
  <th-button-group gutter="5">
    <th-button>Primary</th-button>
    <th-button type="success">Success</th-button>
    <th-button type="info">Info</th-button>
    <th-button type="warning">Warning</th-button>
    <th-button type="danger">Danger</th-button>
    <th-button type="help">Help</th-button>
  </th-button-group>
</template>
```

:::

## 按钮禁用

使用 `disabled` 属性来设置整个按钮组的禁用，也可以单独设置每个按钮的禁用状态。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button-group>
        <th-button>Primary</th-button>
        <th-button type="success">Success</th-button>
        <th-button type="info">Info</th-button>
        <th-button type="warning">Warning</th-button>
        <th-button type="danger">Danger</th-button>
        <th-button type="help">Help</th-button>
      </th-button-group>
    </div>
    <div class="button-item">
      <th-button-group>
        <th-button type="success">Success</th-button>
        <th-button type="success" disabled>Success</th-button>
      </th-button-group>
    </div>
  </div>
</template>

<style>
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.button-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
```

:::

## ButtonGroup API

### ButtonGroup Attributes

| 属性名    | <div style="width:60px">说明</div> | 属性值                   |      类型       |    默认值    |
| --------- | :--------------------------------: | ------------------------ | :-------------: | :----------: |
| direction |            按钮组的方向            | `horizontal`、`vertical` |    `string`     | `horizontal` |
| gutter    |            按钮组的间隔            | -                        | `string/number` |     `0`      |
| disabled  |            按钮组的禁用            | -                        |    `boolean`    |   `false`    |

### ButtonGroup Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |
