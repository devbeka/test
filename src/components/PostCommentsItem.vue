<template>
  <div class="comment">
    <p class="comment__name">{{ comment.name }}:</p>
    {{ comment.body }}
  </div>
</template>

<script setup lang="ts">
import { Comment } from '../services/comments'

const { comment } = defineProps<{ comment: Comment }>()
</script>

<style lang="scss" scoped>
.comment {
  border-bottom: 1px solid #d7d7d7;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 5px;

  &__name {
    color: blue;
    font-size: 18px;
  }
}
</style>
