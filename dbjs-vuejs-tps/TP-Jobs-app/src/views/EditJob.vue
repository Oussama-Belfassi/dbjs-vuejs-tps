<template>
  <h1>Modifier l'emploi</h1>
  <p v-if="loading">Chargement...</p>
  <p v-else-if="error" class="error">{{ error }}</p>
  <!-- Le formulaire est pré-rempli avec l'emploi existant -->
  <JobForm v-else :job="job" submit-label="Enregistrer les modifications" :saving="saving" @submit="save" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../api.js'
import JobForm from '../components/JobForm.vue'

const props = defineProps({ id: { type: String, required: true } })
const router = useRouter()

const job = ref(null)
const loading = ref(true)
const saving = ref(false)
const error = ref('')

onMounted(async () => {
  try {
    job.value = await api.getOne(props.id)
  } catch {
    error.value = 'Emploi introuvable.'
  } finally {
    loading.value = false
  }
})

async function save(data) {
  saving.value = true
  try {
    await api.update(props.id, data)
    router.push(`/jobs/${props.id}`)
  } catch {
    error.value = 'Échec de la modification.'
  } finally {
    saving.value = false
  }
}
</script>
