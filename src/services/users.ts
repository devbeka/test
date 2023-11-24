import { API_URL } from './consts'

interface GeoLocation {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoLocation
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export function getUsers(): Promise<User[]> {
  return fetch(`${API_URL}/users/`).then((response) => response.json())
}
