<template>
  <div class="post">
    <div class="post__item">
      <h3 class="post__name">{{ user.name }}</h3>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>

    <dvi class="post__comments">
      <h5 class="post__comments-title">Comments:</h5>
      <PostCommentsItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
      <PostCommentsForm
        :post="post"
        :comments="comments"
        :last-writed-comment="lastWritedComment"
        @write-comment="writeComment"
        @submit-form="sendComment"
      />
    </dvi>
  </div>
</template>

<script setup lang="ts">
import { Post } from '../services/posts'
import { User } from '../services/users'
import { useComments } from '../hooks/useComments'
import PostCommentsItem from './PostCommentsItem.vue'
import PostCommentsForm from './PostCommentsForm.vue'

const { post, user, lastWritedComment } = defineProps<{
  post: Post
  user: User
  lastWritedComment: { postId: number; text: string }
}>()
const { comments } = useComments(post.id)

function writeComment({ text, postId }: { postId: number; text: string }) {
  lastWritedComment.text = text
  lastWritedComment.postId = postId
}

function sendComment(commentText: string) {
  comments.value.push({
    postId: post.id,
    id: comments.value.length + 1,
    name: 'you',
    email: 'youremail',
    body: commentText,
  })
  lastWritedComment.text = ''
  lastWritedComment.postId = -1
}
</script>

<style lang="scss" scoped>
.post {
  width: 700px;
  padding: 35px 60px 70px 60px;
  margin: 0 auto;

  &__item {
    background-color: bisque;
    padding: 10px;
    border-radius: 10px;
  }

  &__name {
    color: green;
  }
}
</style>
