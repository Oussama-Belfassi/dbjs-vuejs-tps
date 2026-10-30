<template>
  <h1>Catalogue de livres</h1>
  <p class="loading" v-show="store.loading">Chargement du catalogue...</p>

  <AddBookForm @add-book="addBook" />

  <BookList
    :books="store.books"
    @toggle-fav="toggleFavori"
    @delete-book="deleteBook"
  />
</template>

<script>
import AddBookForm from '../components/AddBookForm.vue'
import BookList from '../components/BookList.vue'
import { store } from '../store/books.js'

export default {
  name: 'HomeView',
  components: { AddBookForm, BookList },
  data() {
    return { store }
  },
  methods: {
    addBook(bookData) {
      // Nouvel id = plus grand id existant + 1 (évite les doublons après une suppression)
      const id = store.books.reduce((max, b) => Math.max(max, b.id), 0) + 1
      store.books.push({ ...bookData, id })
    },
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      store.books = store.books.filter(b => b.id !== book.id)
    }
  }
}
</script>
