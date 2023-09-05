<template>
  <div class="container">
    <fieldset class="field-set">
      <legend>按钮类型</legend>
      <div class="btn-item">
        <th-button>点我</th-button>
        <th-button type="success">点我</th-button>
        <th-button type="info">点我</th-button>
        <th-button type="warning">点我</th-button>
        <th-button type="danger">点我</th-button>
        <th-button type="help">点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮形状</legend>
      <div class="shape-btn">
        <fieldset class="field-set-inner">
          <legend>按钮-圆角</legend>
          <div class="btn-item">
            <th-button shape="round">点我</th-button>
            <th-button type="success" shape="round">点我</th-button>
            <th-button type="info" shape="round">点我</th-button>
            <th-button type="warning" shape="round">点我</th-button>
            <th-button type="danger" shape="round">点我</th-button>
            <th-button type="help" shape="round">点我</th-button>
          </div>
        </fieldset>
        <fieldset class="field-set-inner">
          <legend>按钮-圆形</legend>
          <div class="btn-item">
            <th-button shape="circle">点我</th-button>
            <th-button type="success" shape="circle">点我</th-button>
            <th-button type="info" shape="circle">点我</th-button>
            <th-button type="warning" shape="circle">点我</th-button>
            <th-button type="danger" shape="circle">点我</th-button>
            <th-button type="help" shape="circle">点我</th-button>
          </div>
          <div class="btn-item">
            <th-button size="mini" shape="circle">点我</th-button>
            <th-button size="small" type="success" shape="circle">
              点我
            </th-button>
            <th-button type="warning" shape="circle">点我</th-button>
            <th-button size="large" type="info" shape="circle">点我</th-button>
          </div>
        </fieldset>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮大小</legend>
      <div class="btn-item">
        <th-button size="mini">点我</th-button>
        <th-button size="small">点我</th-button>
        <th-button>点我</th-button>
        <th-button size="large">点我</th-button>
      </div>
      <div class="btn-item">
        <th-button type="success" size="mini">点我</th-button>
        <th-button type="info" size="small">点我</th-button>
        <th-button type="warning">点我</th-button>
        <th-button type="danger" size="large">点我</th-button>
        <th-button type="help" size="large">点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮镂空</legend>
      <div class="btn-item">
        <th-button plain>点我</th-button>
        <th-button type="success" plain>点我</th-button>
        <th-button type="info" plain>点我</th-button>
        <th-button type="warning" plain>点我</th-button>
        <th-button type="danger" plain>点我</th-button>
        <th-button type="help" plain>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮文本</legend>
      <div class="btn-item">
        <th-button text>点我</th-button>
        <th-button type="success" text>点我</th-button>
        <th-button type="info" text>点我</th-button>
        <th-button type="warning" text>点我</th-button>
        <th-button type="danger" text>点我</th-button>
        <th-button type="help" text>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮链接</legend>
      <div class="btn-item">
        <th-button link>点我</th-button>
        <th-button type="success" link>点我</th-button>
        <th-button type="info" link>点我</th-button>
        <th-button type="warning" link>点我</th-button>
        <th-button type="danger" link>点我</th-button>
        <th-button type="help" link>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮-行内块</legend>
      <div class="btn-item btn-block">
        <th-button block>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮-禁用</legend>
      <div class="btn-item">
        <th-button disabled>点我</th-button>
        <th-button type="success" disabled>点我</th-button>
        <th-button type="info" disabled>点我</th-button>
        <th-button type="warning" disabled>点我</th-button>
        <th-button type="danger" disabled>点我</th-button>
        <th-button type="help" disabled>点我</th-button>
      </div>
      <div class="btn-item">
        <th-button text disabled>点我</th-button>
        <th-button type="success" text disabled>点我</th-button>
        <th-button type="info" text disabled>点我</th-button>
        <th-button type="warning" text disabled>点我</th-button>
        <th-button type="danger" text disabled>点我</th-button>
        <th-button type="help" text disabled>点我</th-button>
      </div>
      <div class="btn-item">
        <th-button link disabled>点我</th-button>
        <th-button type="success" link disabled>点我</th-button>
        <th-button type="info" link disabled>点我</th-button>
        <th-button type="warning" link disabled>点我</th-button>
        <th-button type="danger" link disabled>点我</th-button>
        <th-button type="help" link disabled>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮-加载</legend>
      <div class="btn-item">
        <th-button loading>点我</th-button>
        <th-button type="success" loading>点我</th-button>
        <th-button type="info" loading>点我</th-button>
        <th-button type="warning" loading>点我</th-button>
        <th-button type="danger" loading>点我</th-button>
        <th-button type="help" loading>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮-拟态</legend>
      <div class="btn-item">
        <th-button mimicry="convex">点我</th-button>
        <th-button mimicry="concave">点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮-自定义颜色</legend>
      <div class="btn-item">
        <th-button color="#e74c3c">点我</th-button>
        <th-button color="#e74c3c" plain>点我</th-button>
        <th-button color="#fdcb6e" plain>点我</th-button>
        <th-button color="#e74c3c" text>点我</th-button>
        <th-button color="#e74c3c" link>点我</th-button>
        <th-button color="#e74c3c" disabled>点我</th-button>
        <th-button color="#e74c3c" loading>点我</th-button>
      </div>
    </fieldset>
    <fieldset class="field-set">
      <legend>按钮组</legend>
      <div class="btn-item">
        <th-button-group>
          <th-button>点我</th-button>
          <th-button type="success">点我</th-button>
          <th-button type="info">点我</th-button>
          <th-button type="warning">点我</th-button>
          <th-button type="danger">点我</th-button>
          <th-button type="help">点我</th-button>
        </th-button-group>
      </div>
      <div class="btn-item">
        <th-button-group size="large">
          <th-button>点我</th-button>
          <th-button type="success" disabled>点我</th-button>
          <th-button type="info">点我</th-button>
          <th-button type="warning">点我</th-button>
          <th-button type="danger">点我</th-button>
          <th-button type="help">点我</th-button>
        </th-button-group>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<script setup lang="ts"></script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
  overflow: auto;
  gap: 10px;
  .field-set {
    width: 600px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 12px;
    legend {
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
    }
  }
  .btn-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
  }
  .btn-block {
    flex-direction: column;
  }
}
</style>
