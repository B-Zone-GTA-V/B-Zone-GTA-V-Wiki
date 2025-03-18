<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const contributors = computed(() => page.value.contributors || [])
</script>

<template>
  <div class="contributors">
    <div v-if="contributors.length">
      <ul class="contributors-list">
        <li v-for="contributor in contributors" :key="contributor.name" class="contributor-item">
          <a :href="contributor.githubUrl" target="_blank" rel="noopener noreferrer" class="contributor-link">
            <div class="avatar-container">
              <img :src="contributor.avatar" :alt="contributor.name" class="avatar" />
              <span class="name">{{ contributor.name }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <p v-else>Niciun contribuitor găsit.</p>
  </div>
</template>

<style scoped>
.contributors {
  margin-top: 2rem;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contributors-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
}

.contributor-item {
  margin: 0.5rem;
}

.contributor-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.avatar:hover {
  transform: scale(1.1);
}

.name {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  opacity: 0; /* Initially hidden */
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
}

.avatar-container:hover .name {
  opacity: 1; /* Show on hover */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>