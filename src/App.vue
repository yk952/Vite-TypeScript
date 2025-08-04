<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import UserCard from './components/UserCard.vue';
import Product from './components/Product.vue';
import { test } from '@/components/Test' // 关键：使用 @ 开头的路径
console.log(test)
import {ref} from 'vue'
const message = ref<string>("Hello AutoImport");
</script>

<template>
  <Product 
    :product="{ id: 1, name: 'Laptop', price: 999, stock: 10 }" 
    :is-on-sale="true"
  />
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p>{{ message }}</p>
  <HelloWorld msg="Vite + Vue" />
  <UserCard />
  <!-- 路由匹配到的组件会显示在这里 -->
  <router-view />
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
</style>
