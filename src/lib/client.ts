
import axios, { AxiosInstance } from 'axios'
import { LoginUserParams } from './services/user/login'
import { ArtsList } from './services/arts/get-arts'

export default class Client {
  private axios: AxiosInstance 

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_URL,
      withCredentials: true
    })

    // Adiciona o interceptor para incluir o token em todas as requisições
    this.axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')  // Assumindo que o token está armazenado no localStorage
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
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
    console.log('Token:', token)

    // Armazena o token após o login
    if (token) {
      localStorage.setItem('token', token)
    }

    return response.data
  }

  async getDownloadsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }

  async getArtsList(page: number, requesterId: string, itemsPerPage: number): Promise<ArtsList> {
    return (await this.axios.get(`api/arts?page=${page}&requesterId=${requesterId}&itemsPerPage=${itemsPerPage}`)).data
  }
}
