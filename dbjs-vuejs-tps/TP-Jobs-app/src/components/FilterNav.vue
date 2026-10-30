<template>
  <div class="filter-nav">
    <input
      type="search"
      :value="search"
      placeholder="Rechercher (titre, société, lieu)..."
      @input="$emit('update:search', $event.target.value)"
    />
    <div class="types">
      <button
        v-for="t in types"
        :key="t"
        :class="{ active: t === type }"
        @click="$emit('update:type', t)"
      >
        {{ t }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  search: { type: String, default: '' },
  type: { type: String, default: 'Tous' }
})
defineEmits(['update:search', 'update:type'])

const types = ['Tous', 'CDI', 'CDD', 'Stage', 'Freelance']
</script>
