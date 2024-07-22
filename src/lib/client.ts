import axios, { AxiosInstance } from 'axios'
import { LoginUserParams } from './services/user/login'

export default class Client {
  private axios: AxiosInstance 

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_URL + '/api',
      withCredentials: true
    })
  }

  async login(body: LoginUserParams) {
    return (await this.axios.post('users/login', body)).data
  }

}