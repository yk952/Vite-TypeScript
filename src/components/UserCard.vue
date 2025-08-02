<script setup lang="ts">
import { type User, currentUser } from '../types/user-types';
import { ref } from 'vue';

// 使用User类型约束ref
const user = ref<User>(currentUser);
</script>

<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>ID: {{ user.id }}</p>
    <p>Status: {{ user.isActive ? 'Active' : 'Inactive' }}</p>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
}
</style>