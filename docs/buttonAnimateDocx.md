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
    <th-particle-button>点击动画按钮</th-particle-button>
    <th-particle-button color="#0984e3">点击动画按钮</th-particle-button>
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

### ParticleButton Attributes

| 属性名 | <div style="width:60px">说明</div> | 属性值 |      类型       |  默认值   |
| ------ | :--------------------------------: | ------ | :-------------: | :-------: |
| color  |              按钮颜色              | -      |    `string`     | `#7d2ae8` |
| width  |              按钮宽度              | -      | `string/number` |     -     |
| height |              按钮高度              | -      | `string/number` |     -     |

### ParticleButton Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |

## 提交类按钮

移动到按钮上时会出现特效，可以通过 `color` 控制按钮颜色

通过 `width`、`height` 控制按钮大小

:::demo

```vue
<template>
  <div class="animate-container">
    <th-submit-button>点击提交</th-submit-button>
    <th-submit-button color="#0984e3">点击提交</th-submit-button>
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

### SubmitButton Attributes

| 属性名 | <div style="width:60px">说明</div> | 属性值 |      类型       |  默认值   |
| ------ | :--------------------------------: | ------ | :-------------: | :-------: |
| color  |              按钮颜色              | -      |    `string`     | `#7d2ae8` |
| width  |              按钮宽度              | -      | `string/number` |     -     |
| height |              按钮高度              | -      | `string/number` |     -     |

### SubmitButton Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |

## 操作类按钮

移动到按钮上时会出现特效，可以通过 `color` 控制按钮颜色，通过`hover-color` 控制鼠标移入颜色

:::demo

```vue
<template>
  <div class="animate-container">
    <th-operate-button />
    <th-operate-button type="plus" color="#7d2ae8" hover-color="#0984e3" />
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

### OperateButton Attributes

| 属性名      | <div style="width:60px">说明</div> | 属性值                                          |   类型   |  默认值   |
| ----------- | :--------------------------------: | ----------------------------------------------- | :------: | :-------: |
| color       |              按钮颜色              | -                                               | `string` | `#0c2461` |
| hover-color |        鼠标移动到按钮的颜色        | -                                               | `string` | `#eb2f06` |
| type        |              按钮类型              | `plus`、`update`、`delete`、`refresh`、`search` | `string` | `delete`  |

### OperateButton Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |
