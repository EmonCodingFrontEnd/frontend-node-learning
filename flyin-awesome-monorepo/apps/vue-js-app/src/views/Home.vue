<template>
  <div class="vue-js">
    <h1>这是 JavaScript 模块的首页</h1>
    <p>来自 vue-js-app</p>
    <p class="cool">使用 @flyin/shared-utils的方法：toUpperCase 得到 {{ toUpperCase('vue-js-app') }}</p>
  </div>
</template>

<script>
import {toUpperCase} from '@flyin/shared-utils'

export default {
  name: 'JsHomePage',
  methods: {toUpperCase}
}
</script>

<style scoped>
.vue-js {
  margin-top: 30px;
  height: 300px;
  background: linear-gradient(to right, #a8edea, #fed6e3);
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