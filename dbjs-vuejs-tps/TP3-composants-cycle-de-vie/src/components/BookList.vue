<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <!-- On "relaie" le slot nommé du parent vers chaque carte -->
      <template #actions>
        <slot name="actions" :book="book"></slot>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: { BookCard },
  props: {
    books: { type: Array, required: true }
  },
  emits: ['toggle-fav', 'delete-book']
}
</script>
