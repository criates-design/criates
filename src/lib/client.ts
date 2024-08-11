import axios, { AxiosInstance } from 'axios'
import { LoginUserParams } from './services/user/login'
import { ArtsList } from './services/arts/get-arts'
import { User } from '@prisma/client'

export default class Client {
  static getCredits(requesterId: string) {
      throw new Error('Method not implemented.')
  }
  private axios: AxiosInstance 

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_URL,
      withCredentials: true
    })
  }

  async login(body: LoginUserParams) {
    return (await this.axios.post('api/users/login', body)).data
  }

  async getDownloadsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }

  async getArtsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }

  async getUserCredits(requesterId: string): Promise<User> {
    return (await this.axios.get(`api/users/${requesterId}`)).data.user
  }

  async patchCredits(requesterId: string, credits: number): Promise<User> {
    return (await this.axios.patch(`api/users/${requesterId}`, { credits })).data
  }

}