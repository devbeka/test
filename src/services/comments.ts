import { API_URL } from './consts'

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export function getComments(postId: number): Promise<Comment[]> {
  const url = new URL(`${API_URL}/comments/`)

  if (postId) {
    url.searchParams.append('postId', String(postId))
  }

  return fetch(url).then((response) => response.json())
}
