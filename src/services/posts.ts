import { API_URL } from './consts'

export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export function getPosts(): Promise<Post[]> {
  return fetch(`${API_URL}/posts/`).then((response) => response.json())
}
