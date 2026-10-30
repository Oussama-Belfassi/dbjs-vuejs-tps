<template>
  <article class="card">
    <div class="card-head">
      <h3>{{ job.title }}</h3>
      <span class="tag">{{ job.type }}</span>
    </div>
    <p class="meta">{{ job.company }} · {{ job.location }}</p>
    <p class="desc">{{ job.description }}</p>
    <p class="meta">
      {{ job.salary.toLocaleString('fr-FR') }} MAD · {{ job.experience }} an(s) d'expérience
    </p>
    <router-link :to="`/jobs/${job.id}`" class="btn small">Voir les détails</router-link>
  </article>
</template>

<script setup>
defineProps({ job: { type: Object, required: true } })
</script>
