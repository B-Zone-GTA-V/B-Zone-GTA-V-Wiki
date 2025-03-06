<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const contributors = computed(() => page.value.contributors || [])
console.log(contributors);
</script>

<template>
  {{contributors}}
  <div v-if="contributors.length" class="contributors">
    <h3>Contributors</h3>
    <ul>
      <li v-for="contributor in contributors" :key="contributor">
        👤 {{ contributor }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contributors {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #42b983;
}

.contributors h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.contributors ul {
  list-style: none;
  padding: 0;
}

.contributors li {
  font-size: 14px;
  padding: 5px 0;
  color: #555;
}
</style>