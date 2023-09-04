---
outline: deep
---

# 快速开始

> 本节将介绍如何在项目中使用 Tethys Design Button。

## 下载

::: code-group

```bash [npm]
npm install @tethysdesign/button
```

```bash [yarn]
yarn add @tethysdesign/button
```

```bash [pnpm]
pnpm add @tethysdesign/button
```

:::

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import ThButton from '@tethysdesign/button'
import '@tethysdesign/button/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ThButton)
app.mount('#app')
```
