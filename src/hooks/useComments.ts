import { ref, onMounted } from 'vue'
import * as JsonPlaceholderService from '../services'
import { Comment } from '../services/comments'

export function useComments(postId: number) {
  const comments = ref<Comment[]>([])
  const isCommentsLoaded = ref<Boolean>(false)

  onMounted(async () => {
    const response = await JsonPlaceholderService.getComments(postId)
    comments.value = response
    isCommentsLoaded.value = true
  })

  return { comments, isCommentsLoaded }
}
