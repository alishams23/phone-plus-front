import axios from 'axios'
import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin(() => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // If any request receives 401 Unauthorized, the stored token is invalid or expired.
      // Automatically log out so stale credentials are not repeatedly sent.
      if (error.response?.status === 401) {
        try {
          const userStore = useUserStore()
          if (userStore.userToken) {
            userStore.logout()
          }
        } catch (e) {}
      }
      return Promise.reject(error)
    }
  )
})
