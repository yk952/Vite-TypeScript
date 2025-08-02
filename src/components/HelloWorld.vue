<script setup lang="ts">
<<<<<<< HEAD
import { username, age, add } from '../types/basic-types';
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
=======
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
>>>>>>> 193c745eb46044370b3337ad0e0a0d1b3ace5be1
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
<<<<<<< HEAD
  <div>
    <p>Name: {{ username }}</p>
    <p>Age: {{ age }}</p>
    <p>1 + 2 = {{ add(1, 2) }}</p>
  </div>
  
=======

>>>>>>> 193c745eb46044370b3337ad0e0a0d1b3ace5be1
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
<<<<<<< HEAD
  
=======
>>>>>>> 193c745eb46044370b3337ad0e0a0d1b3ace5be1
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
