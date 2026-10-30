<template>
  <form class="job-form" @submit.prevent="submit">
    <label>Titre
      <input v-model.trim="form.title" required />
    </label>
    <label>Société
      <input v-model.trim="form.company" required />
    </label>
    <label>Type de contrat
      <select v-model="form.type">
        <option>CDI</option>
        <option>CDD</option>
        <option>Stage</option>
        <option>Freelance</option>
      </select>
    </label>
    <label>Lieu
      <input v-model.trim="form.location" />
    </label>
    <label>Salaire (MAD)
      <input v-model.number="form.salary" type="number" min="0" required />
    </label>
    <label>Années d'expérience
      <input v-model.number="form.experience" type="number" min="0" required />
    </label>
    <label>Date de création
      <input v-model="form.createdAt" type="date" required />
    </label>
    <label class="full">Description
      <textarea v-model.trim="form.description" rows="4" required></textarea>
    </label>

    <div class="actions full">
      <button type="submit" class="btn" :disabled="saving">
        {{ saving ? 'Enregistrement...' : submitLabel }}
      </button>
      <router-link to="/" class="btn secondary">Annuler</router-link>
    </div>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  // Valeurs initiales (pré-remplissage en mode édition)
  job: { type: Object, default: null },
  submitLabel: { type: String, default: 'Enregistrer' },
  saving: { type: Boolean, default: false }
})
const emit = defineEmits(['submit'])

const today = () => new Date().toISOString().slice(0, 10)
const empty = () => ({
  title: '', company: '', type: 'CDI', location: '',
  salary: 0, experience: 0, createdAt: today(), description: ''
})

const form = reactive(empty())

// Pré-remplit le formulaire dès que `job` est disponible (cas de l'édition)
watch(
  () => props.job,
  (job) => Object.assign(form, empty(), job ?? {}),
  { immediate: true }
)

function submit() {
  emit('submit', { ...form })
}
</script>
