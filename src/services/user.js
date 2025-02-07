import { protectedApi, publicApi } from '@/lib/axios'

export const UserService = {
  /**
   * Cria um novo usuário.
   *
   * @param {Object} user
   * @param {string} user.firstName
   * @param {string} user.lastName
   * @param {string} user.email
   * @param {string} user.password
   * @returns {Object} O usuário criado.
   */
  signup: async (input) => {
    const response = await publicApi.post('/users', {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      password: input.password,
    })
    return {
      id: response.data.id,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      email: response.data.email,
      tokens: response.data.tokens,
    }
  },
  /**
   * Faz o login de um usuário.
   *
   * @param {Object} user
   * @param {string} user.email
   * @param {string} user.password
   * @returns {Object} - Tokens de autenticação ({ accessToken, refreshToken })
   */
  login: async (input) => {
    const response = await publicApi.post('/users/login', {
      email: input.email,
      password: input.password,
    })
    return {
      id: response.data.id,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      email: response.data.email,
      tokens: response.data.tokens,
    }
  },
  /**
   * Retorna os dados do usuário autenticado.
   *
   * @returns {Object} - Uusário autenticado.
   */
  me: async () => {
    const response = await protectedApi.get('/users/me')
    return {
      id: response.data.id,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      email: response.data.email,
    }
  },
  getBalance: async () => {
    const response = await protectedApi.get('/users/me/balance')
    return response.data
  },
}
