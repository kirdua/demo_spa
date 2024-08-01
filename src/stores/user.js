import { ref } from 'vue'
import { defineStore } from 'pinia'

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref(initialState)
  const userLoggedIn = ref(false)

  initialState.userInfo !== null ? (userLoggedIn.value = true) : (userLoggedIn.value = false)

  const login = ({ email, password }) => {
    localStorage.setItem('userInfo', JSON.stringify(email))
    userLoggedIn.value = true
  }

  const logout = () => {
    localStorage.removeItem('userInfo')
    userLoggedIn.value = false
  }

  return { userInfo, userLoggedIn, login, logout }
})
