<template>
  <header class="header">
    <button
      v-for="tab in Object.values(tabs)"
      :key="tab"
      class="header__button"
      :class="{ 'header__button--active': activeTab === tab }"
      @click="$emit('changeTab', tab)"
    >
      {{ tab }}
    </button>
  </header>
</template>

<script setup lang="ts">
const { activeTab, tabs } = defineProps<{
  activeTab: string
  tabs: { [key: string]: string }
}>()
</script>

<style lang="scss" scoped>
.header {
  margin: 10px;
  display: flex;
  justify-content: center;
  position: fixed;

  &__button {
    border-radius: 10px;
    border: none;
    font-size: 20px;
    padding: 10px 30px;
    cursor: pointer;
    background-color: #f0f0f0;
  }

  &__button--active {
    background-color: rgb(63, 199, 63);
    color: white;
  }
}
</style>
