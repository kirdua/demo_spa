import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const dogURL = `https://dog.ceo/api/breeds/image/random`

export const useDogStore = defineStore('dog', () => {
  const currentDogImage = ref('')

  /**
   * @typedef {Object} DogImageResponse
   * @property {string} message - The URL of the random dog image.
   * @property {string} status - The status of the API response.
   */
  const getRandomDogImage = async () => {
    const { data } = await axios.get(dogURL)
    currentDogImage.value = data.message
  }

  return { currentDogImage, getRandomDogImage }
})
