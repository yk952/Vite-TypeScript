<script setup lang="ts">
// 导入defineProps（Vue提供的类型工具）
import { defineProps } from 'vue';

// 定义Product类型
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

// 为props添加类型约束
const props = defineProps<{
  product: Product;
  isOnSale?: boolean; // 可选props
}>();
</script>

<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <p>Price: ${{ product.price }}</p>
    <p>Stock: {{ product.stock }}</p>
    <p v-if="isOnSale">On Sale!</p>
  </div>
</template>