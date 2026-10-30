<template>
  <form @submit.prevent="soumettre">
    <!-- Bonus : ref template pour donner le focus au champ titre -->
    <input ref="titreInput" v-model.trim="newBook.title" placeholder="Titre" />
    <input v-model.trim="newBook.author" placeholder="Auteur" />
    <input v-model.number="newBook.year" type="number" placeholder="Année" />
    <label><input type="checkbox" v-model="newBook.isFav" /> Favori</label>
    <button type="submit" :disabled="!formulaireValide">Ajouter</button>
  </form>
</template>

<script>
const vide = () => ({ title: '', author: '', year: null, genre: '', isFav: false })

export default {
  name: 'AddBookForm',
  emits: ['add-book'],
  data() {
    return { newBook: vide() }
  },
  computed: {
    formulaireValide() {
      return this.newBook.title !== '' && this.newBook.author !== ''
    }
  },
  methods: {
    soumettre() {
      if (!this.formulaireValide) return
      this.$emit('add-book', { ...this.newBook })
      this.newBook = vide()
    }
  },
  // Bonus : le curseur se place automatiquement dans le champ titre
  mounted() {
    this.$refs.titreInput.focus()
  }
}
</script>
