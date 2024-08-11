
import axios, { AxiosInstance } from 'axios'
import { LoginUserParams } from './services/user/login'
import { ArtsList } from './services/arts/get-arts'
import { User } from '@prisma/client'

export default class Client {
  private axios: AxiosInstance 

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_URL,
      withCredentials: true
    })

    this.axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
          console.log('Token incluído na requisição')
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  async login(body: LoginUserParams) {
    const response = await this.axios.post('api/users/login', body)
    const token = response.data.token

    if (token) {
      localStorage.setItem('token', token)
      console.log('Token armazenado com sucesso')
    }

    return response.data
  }

  async getDownloadsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }

  async getArtsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }

  async logout() {
    return this.axios.get('api/logout')
  }

  async getUserCredits(requesterId: string): Promise<User> {
    return (await this.axios.get(`api/users/${requesterId}`)).data.user
  }

  async patchCredits(requesterId: string, credits: number): Promise<User> {
    return (await this.axios.patch(`api/users/${requesterId}`, { credits })).data
  }

}
