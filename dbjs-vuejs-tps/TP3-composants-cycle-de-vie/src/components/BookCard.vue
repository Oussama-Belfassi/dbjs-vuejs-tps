<template>
  <div class="book" :class="{ favori: book.isFav }">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} -- {{ book.year }}</p>
    <span class="badge-favori" v-if="book.isFav">Favori</span>

    <div>
      <!-- 3. On ne modifie PAS la props : on demande au parent via $emit -->
      <button @click="$emit('toggle-fav', book)">Favori</button>
      <button @click="$emit('delete-book', book)">Supprimer</button>
    </div>

    <!-- 4. Slot nommé, placé après le badge favori -->
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    // 2. Props validée : objet requis dont le titre existe et n'est pas vide
    book: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.title === 'string' && value.title.trim().length > 0
      }
    }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>
