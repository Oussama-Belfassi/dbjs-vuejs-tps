<template>
  <h1>Ajouter un emploi</h1>
  <p v-if="error" class="error">{{ error }}</p>
  <JobForm submit-label="Ajouter l'emploi" :saving="saving" @submit="save" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../api.js'
import JobForm from '../components/JobForm.vue'

const router = useRouter()
const saving = ref(false)
const error = ref('')

async function save(job) {
  saving.value = true
  error.value = ''
  try {
    await api.create(job)
    router.push('/')
  } catch {
    error.value = "Échec de l'ajout. L'API est-elle démarrée ?"
  } finally {
    saving.value = false
  }
}
</script>
