const vide = () => ({ title: '', author: '', year: null, genre: '', isFav: false, keywords: [] })

Vue.createApp({
  data() {
    return {
      books: [
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Génie logiciel', isFav: true, keywords: ['refactoring', 'qualité'] },
        { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', year: 2009, genre: 'Algorithmique', isFav: false, keywords: ['complexité'] },
        { id: 3, title: 'Design Patterns', author: 'Gamma, Helm, Johnson, Vlissides', year: 1994, genre: 'Génie logiciel', isFav: true, keywords: ['POO', 'conception'] },
        { id: 4, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', year: 2010, genre: 'Réseaux', isFav: false, keywords: ['TCP/IP'] }
      ],
      newBook: vide(),
      nouveauMotCle: ''
    }
  },

  computed: {
    // 2. Valide seulement si title et author ne sont pas vides
    formulaireValide() {
      return this.newBook.title.trim() !== '' && this.newBook.author.trim() !== ''
    }
  },

  methods: {
    // 1. Pousse une COPIE de newBook (avec un nouvel id), puis réinitialise le formulaire
    ajouterLivre() {
      if (!this.formulaireValide) return
      const id = this.books.reduce((max, b) => Math.max(max, b.id), 0) + 1
      this.books.push({ ...this.newBook, keywords: [...this.newBook.keywords], id })
      this.newBook = vide()
    },

    // 3. On compare les id, pas les objets
    supprimerLivre(book) {
      this.books = this.books.filter(b => b.id !== book.id)
    },

    // 4. Inverse isFav
    toggleFavori(book) {
      book.isFav = !book.isFav
    },

    // 5. Mots-clés : sans doublon, champ vidé après ajout
    ajouterMotCle() {
      const mot = this.nouveauMotCle.trim()
      if (mot && !this.newBook.keywords.includes(mot)) {
        this.newBook.keywords.push(mot)
      }
      this.nouveauMotCle = ''
    },
    retirerMotCle(mot) {
      this.newBook.keywords = this.newBook.keywords.filter(m => m !== mot)
    }
  }
}).mount('#app')
