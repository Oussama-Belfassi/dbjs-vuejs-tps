<template>
  <p v-if="loading">Chargement...</p>
  <p v-else-if="error" class="error">{{ error }}</p>

  <article v-else class="detail">
    <div class="card-head">
      <h1>{{ job.title }}</h1>
      <span class="tag">{{ job.type }}</span>
    </div>
    <p class="meta">{{ job.company }} · {{ job.location }}</p>
    <p>{{ job.description }}</p>
    <ul>
      <li><strong>Salaire :</strong> {{ job.salary.toLocaleString('fr-FR') }} MAD</li>
      <li><strong>Expérience requise :</strong> {{ job.experience }} an(s)</li>
      <li><strong>Date de création :</strong> {{ job.createdAt }}</li>
    </ul>

    <div class="actions">
      <router-link :to="`/jobs/${job.id}/edit`" class="btn">Modifier</router-link>
      <button class="btn danger" @click="remove">Supprimer</button>
      <router-link to="/" class="btn secondary">Retour</router-link>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../api.js'

const props = defineProps({ id: { type: String, required: true } })
const router = useRouter()

const job = ref(null)
const loading = ref(true)
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

async function remove() {
  // Confirmation avant suppression
  if (!window.confirm(`Supprimer l'emploi « ${job.value.title} » ?`)) return
  try {
    await api.remove(props.id)
    router.push('/')
  } catch {
    error.value = 'Échec de la suppression.'
  }
}
</script>
