<template>
  <section class="users">
    <div v-for="user in users" :key="user.id" class="users__item">
      <span>{{ user.name }}</span>
      <button class="users__btn" @click="$emit('filterByUser', user.id)">
        Посмотреть посты пользователя
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Post } from '../services/posts'
import { User } from '../services/users'

const { users } = defineProps<{
  posts: Post[] | undefined
  users: User[]
}>()
</script>

<style lang="scss" scoped>
.users {
  margin: 10px auto;
  max-width: 385px;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 20px 5px;
    border-bottom: 1px solid #fafafa;
  }
  &__btn {
    border: 1px solid #888;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    width: 200px;
    font-size: 13px;
    background-color: bisque;
  }
}
</style>
