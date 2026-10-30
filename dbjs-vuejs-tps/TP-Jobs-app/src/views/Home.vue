<template>
  <h1>Offres d'emploi</h1>

  <FilterNav v-model:search="search" v-model:type="type" />

  <p v-if="loading">Chargement...</p>
  <p v-else-if="error" class="error">{{ error }}</p>
  <template v-else>
    <p class="count">{{ filteredJobs.length }} offre(s)</p>
    <div class="grid">
      <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
    </div>
    <p v-if="filteredJobs.length === 0">Aucune offre ne correspond à votre recherche.</p>
  </template>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { api } from '../api.js'
import FilterNav from '../components/FilterNav.vue'
import JobCard from '../components/JobCard.vue'

const jobs = ref([])
const loading = ref(true)
const error = ref('')
const search = ref('')
const type = ref('Tous')

const filteredJobs = computed(() => {
  const q = search.value.toLowerCase()
  return jobs.value.filter(j =>
    (type.value === 'Tous' || j.type === type.value) &&
    [j.title, j.company, j.location].some(v => (v ?? '').toLowerCase().includes(q))
  )
})

onMounted(async () => {
  try {
    jobs.value = await api.getAll()
  } catch {
    error.value = "Impossible de joindre l'API. Lancez-vous bien json-server (npm run server) ?"
  } finally {
    loading.value = false
  }
})
</script>
