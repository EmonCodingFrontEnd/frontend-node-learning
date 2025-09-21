<template>
  <div class="vue-ts">
    <h1>这是 TypeScript 模块的首页</h1>
    <p>来自 vue-ts-app</p>
    <p class="cool">使用 @flyin/shared-utils的方法：toUpperCase 得到 {{ toUpperCase('vue-ts-app') }}</p>
  </div>
</template>

<script setup lang="ts">
// 这是一个 Composition API with <script setup> 组件
import {toUpperCase} from '@flyin/shared-utils'
</script>

<style scoped lang="css">
.vue-ts {
  margin-top: 30px;
  height: 300px;
  background: linear-gradient(to right, #00b09b, #96c93d, #ff6b6b, #ff8e8e, #4ecdc4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cool {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% 200%;
  animation: simpleGradientShift 2s ease infinite;
}

@keyframes simpleGradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>