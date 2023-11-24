<template>
  <div class="filter">
    <span>
      Посты пользователя
      {{ userName }}
    </span>
    <button class="filter__button" @click="$emit('resetFilter')">X</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { User } from '../services/users'

const { postsFilter, users } = defineProps<{
  postsFilter: { userId: number }
  users: User[]
}>()
const userName = computed(
  () => users.find((user) => user.id === postsFilter.userId)?.name
)
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;

  &__button {
    background-color: transparent;
    border: 1px solid #888;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
