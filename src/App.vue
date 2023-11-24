<template>
  <div class="app">
    <HeaderNav
      :active-tab="activeTab"
      :tabs="TABS"
      @change-tab="(tab) => (activeTab = tab)"
    />
    <component
      :is="PAGES[activeTab]"
      v-if="isUsersLoaded && isPostsLoaded"
      :posts="posts"
      :users="users"
      :posts-filter="postsFilter"
      :last-writed-comment="lastWritedComment"
      @filter-by-user="handleFiltering"
      @reset-filter="postsFilter.userId = -1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePosts } from './hooks/usePosts'
import { useUsers } from './hooks/useUsers'
import PostsPage from './pages/Posts.vue'
import HeaderNav from './components/Header.vue'
import UsersPage from './pages/Users.vue'

const TABS = {
  POSTS: 'посты',
  USERS: 'пользователи',
}
const PAGES = {
  [TABS.POSTS]: PostsPage,
  [TABS.USERS]: UsersPage,
}

const { users, isUsersLoaded } = useUsers()
const { posts, isPostsLoaded } = usePosts()
const lastWritedComment = ref<{ commentId?: number; text?: string }>({})
const activeTab = ref<string>(TABS.POSTS)
const postsFilter = ref<{ userId: number }>({ userId: -1 })

function handleFiltering(userId: number) {
  activeTab.value = TABS.POSTS
  postsFilter.value.userId = userId
}
</script>
