import { ref, onMounted } from 'vue'
import * as JsonPlaceholderService from '../services'
import { Post } from '../services/posts'

export function usePosts() {
  const posts = ref<Post[]>([])
  const isPostsLoaded = ref<Boolean>(false)

  onMounted(async () => {
    try {
      const response = await JsonPlaceholderService.getPosts()
      posts.value = response
      isPostsLoaded.value = true
    } catch (error) {
      console.log(error)
    }
  })

  return { posts, isPostsLoaded }
}
