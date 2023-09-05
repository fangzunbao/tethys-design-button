---
outline: deep
---

<script setup>
import '../packages/style/index.scss'
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button>Primary</th-button>
      <th-button type="success">success</th-button>
      <th-button type="info">info</th-button>
      <th-button type="warning">warning</th-button>
      <th-button type="danger">danger</th-button>
      <th-button type="help">help</th-button>
    </div>
    <div class="button-item">
      <th-button shape="round">Primary</th-button>
      <th-button type="success" shape="round">success</th-button>
      <th-button type="info" shape="round">info</th-button>
      <th-button type="warning" shape="round">warning</th-button>
      <th-button type="danger" shape="round">danger</th-button>
      <th-button type="help" shape="round">help</th-button>
    </div>
    <div class="button-item">
      <th-button plain>Primary</th-button>
      <th-button type="success" plain>success</th-button>
      <th-button type="info" plain>info</th-button>
      <th-button type="warning" plain>warning</th-button>
      <th-button type="danger" plain>danger</th-button>
      <th-button type="help" plain>help</th-button>
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

## 文本按钮

使用 text 是按钮变为文本样式。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button text>Primary</th-button>
      <th-button type="success" text>success</th-button>
      <th-button type="info" text>info</th-button>
      <th-button type="warning" text>warning</th-button>
      <th-button type="danger" text>danger</th-button>
      <th-button type="help" text>help</th-button>
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

## 链接按钮

使用 link 是按钮变为链接样式。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button link>Primary</th-button>
      <th-button type="success" link>success</th-button>
      <th-button type="info" link>info</th-button>
      <th-button type="warning" link>warning</th-button>
      <th-button type="danger" link>danger</th-button>
      <th-button type="help" link>help</th-button>
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

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true/false 来显示加载中状态

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button loading>Primary</th-button>
      <th-button type="success" loading>success</th-button>
      <th-button type="info" loading>info</th-button>
      <th-button type="warning" loading>warning</th-button>
      <th-button type="danger" loading>danger</th-button>
      <th-button type="help" loading>help</th-button>
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

## 按钮尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 mini、medium、small和large四种值，其中medium是默认值。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button size="mini">Primary</th-button>
      <th-button size="small">Primary</th-button>
      <th-button size="medium">Primary</th-button>
      <th-button size="large">Primary</th-button>
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

## 拟态

按钮可设置为拟态，可应用于拟态化风格的设计。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <div class="button-item">
      <th-button mimicry="convex">Primary</th-button>
      <th-button mimicry="concave">Primary</th-button>
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

## 按钮禁用

使用 disabled 使按钮变为禁用状态。

:::demo

```vue
<template>
  <div class="button-wrapper">
    <span class="item-text">普通按钮-禁用</span>
    <div class="button-item">
      <th-button disabled>Primary</th-button>
      <th-button type="success" disabled>success</th-button>
      <th-button type="info" disabled>info</th-button>
      <th-button type="warning" disabled>warning</th-button>
      <th-button type="danger" disabled>danger</th-button>
      <th-button type="help" disabled>help</th-button>
    </div>
    <span class="item-text">文本按钮-禁用</span>
    <div class="button-item">
      <th-button text disabled>Primary</th-button>
      <th-button type="success" text disabled>success</th-button>
      <th-button type="info" text disabled>info</th-button>
      <th-button type="warning" text disabled>warning</th-button>
      <th-button type="danger" text disabled>danger</th-button>
      <th-button type="help" text disabled>help</th-button>
    </div>
    <span class="item-text">链接按钮-禁用</span>
    <div class="button-item">
      <th-button link disabled>Primary</th-button>
      <th-button type="success" link disabled>success</th-button>
      <th-button type="info" link disabled>info</th-button>
      <th-button type="warning" link disabled>warning</th-button>
      <th-button type="danger" link disabled>danger</th-button>
      <th-button type="help" link disabled>help</th-button>
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

.item-text {
  font-size: 14px;
  font-weight: bold;
}

.button-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
```

:::

## Button API

### Button Attributes

| 属性名    | <div style="width:60px">说明</div> | 属性值                                                    |   类型    |  默认值   |
| --------- | :--------------------------------: | --------------------------------------------------------- | :-------: | :-------: |
| `type`    |                类型                | `primary`、`success`、`info`、`warning`、`danger`、`help` | `string`  | `primary` |
| `shape`   |                形状                | `square`、`round`、`circle`                               | `string`  | `square`  |
| `size`    |                尺寸                | `mini`、`small`、`medium`、`large`                        | `string`  | `medium`  |
| `mimicry` |               拟态化               | `convex`、`concave`                                       | `string`  |     -     |
| `plain`   |                镂空                | -                                                         | `boolean` |  `false`  |
| `text`    |              文字按钮              | -                                                         | `boolean` |  `false`  |
| `link`    |              链接按钮              | -                                                         | `boolean` |  `false`  |
| `loading` |              加载状态              | -                                                         | `boolean` |  `false`  |

### Button Slots

### Button Exposes
