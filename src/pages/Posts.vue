<template>
  <div class="posts">
    <FilterState
      v-if="postsFilter.userId! >= 0"
      :posts-filter="postsFilter"
      :users="users"
      @reset-filter="$emit('resetFilter')"
    />
    <PostItem
      v-for="post in visiblePosts"
      :key="post.id"
      :post="post"
      :user="users[post.userId - 1]"
      :last-writed-comment="lastWritedComment"
    />
  </div>
</template>

<script setup lang="ts">
import PostItem from '../components/PostItem.vue'
import { computed, ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import { Post } from '../services/posts'
import { User } from '../services/users'
import FilterState from '../components/FilterState.vue'

const POSTS_PER_SCROLL = 20
const { users, posts, postsFilter, lastWritedComment } = defineProps<{
  posts: Post[]
  users: User[]
  postsFilter: { userId: number }
  lastWritedComment: { postId: number; text: string }
}>()
const postsToShow = ref(POSTS_PER_SCROLL)
const filteredPosts = computed(() =>
  postsFilter.userId! >= 0
    ? posts!.filter((post) => post.userId === postsFilter.userId)
    : posts
)
const visiblePosts = computed(() => {
  return filteredPosts.value.slice(0, postsToShow.value)
})

const loadMorePosts = () => {
  if (postsToShow.value >= filteredPosts!.value.length) {
    return
  }
  postsToShow.value += POSTS_PER_SCROLL
}

useInfiniteScroll(document, loadMorePosts)
</script>

