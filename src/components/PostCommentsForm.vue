<template>
  <form
    class="comment"
    @submit.prevent="
      $emit('submitForm', commentText);
      commentText = ''
    "
  >
    <textarea
      v-model="commentText"
      type="text"
      class="comment__textarea"
      placeholder="Добавьте комментарий..."
      rows="4"
      @input="$emit('writeComment', { text: commentText, postId: post.id })"
    />
    <button type="submit" class="comment__submit">комментировать</button>
  </form>
</template>

<script setup lang="ts">
import { Post } from '../services/posts'
import { ref } from 'vue'
import { Comment } from '../services/comments'

const { post, lastWritedComment } = defineProps<{
  post: Post
  comments: Comment[]
  lastWritedComment: { postId: number; text: string }
}>()
const commentText = ref(
  lastWritedComment.postId === post.id ? lastWritedComment.text : ''
)
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 20px;

  &__textarea {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  &__submit {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    background-color: burlywood;
    color: black;
  }
}
</style>
