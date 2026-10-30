<template>
  <h1>Catalogue de livres</h1>

  <!-- 5. v-show (et pas v-if) : l'élément change souvent d'état -->
  <p class="loading" v-show="loading">Chargement du catalogue...</p>

  <AddBookForm @add-book="addBook" />

  <!-- 1. Props : on passe books à BookList -->
  <BookList :books="books" @toggle-fav="toggleFavori" @delete-book="deleteBook">
    <!-- 4. Contenu injecté dans le slot nommé "actions" de chaque BookCard -->
    <template #actions="{ book }">
      <small>Publié en {{ book.year }}</small>
    </template>
  </BookList>
</template>

<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

const initialBooks = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Génie logiciel', isFav: true },
  { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', year: 2009, genre: 'Algorithmique', isFav: false },
  { id: 3, title: 'Design Patterns', author: 'Gamma, Helm, Johnson, Vlissides', year: 1994, genre: 'Génie logiciel', isFav: true },
  { id: 4, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', year: 2010, genre: 'Réseaux', isFav: false }
]

export default {
  name: 'App',
  components: { AddBookForm, BookList },

  // App.vue est le SEUL endroit où vit l'état : les enfants affichent ou demandent une modification.
  data() {
    return { books: [], loading: true }
  },

  // 5. Simule un chargement réseau
  mounted() {
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  },

  methods: {
    addBook(bookData) {
      const id = this.books.reduce((max, b) => Math.max(max, b.id), 0) + 1
      this.books.push({ ...bookData, id })
    },
    // 3. Le parent modifie la donnée, à la demande de l'enfant (via $emit)
    toggleFavori(book) {
      book.isFav = !book.isFav
    },
    deleteBook(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    }
  }
}
</script>
