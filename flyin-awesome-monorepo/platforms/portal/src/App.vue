<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" v-if="false"/>
  <div class="unified-portal">
    <nav>
      <h1>统一门户入口</h1>
      <router-link to="/js">JS 模块</router-link>
      |
      <router-link to="/ts">TS 模块</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.unified-portal {
  background-image: linear-gradient(315deg, #00b09b 0%, #96c93d 74%);
  padding: 20px;
  border-radius: 8px;
  width: 800px;
  height: 500px;
}

.unified-portal nav a {
  font-size: 18px;
  text-decoration: none;
  color: #333333; /* 默认状态使用深灰色 */
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin: 0 5px;
}

/* 鼠标悬停样式 */
.unified-portal nav a:hover {
  color: #ffffff; /* 悬停时变为白色字体 */
  background-color: #3498db; /* 蓝色背景 */
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.4);
}

/* 激活状态样式 */
.unified-portal nav a.router-link-active {
  color: #ffffff; /* 激活状态白色字体 */
  background-color: #9b59b6; /* 紫色背景标识激活状态 */
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(155, 89, 182, 0.4);
}

</style>
