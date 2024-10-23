<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()
const contributors = computed(() => page.value.contributors)
</script>

# B-Zone V Wiki

## Bun venit!

Bun venit pe pagina de Wiki! Aici vei găsi informații generale referitoare la cum funcționează server-ul și client-ul de RAGE!