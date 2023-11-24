import { ref, onMounted } from 'vue'
import * as JsonPlaceholderService from '../services'
import { User } from '../services/users'

export function useUsers() {
  const users = ref<User[]>([])
  const isUsersLoaded = ref<Boolean>(false)

  onMounted(async () => {
    try {
      const response = await JsonPlaceholderService.getUsers()
      users.value = response
      isUsersLoaded.value = true
    } catch (error) {
      console.log(error)
    }
  })

  return { users, isUsersLoaded }
}
