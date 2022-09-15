import { defineStore } from 'pinia'
import axios from 'axios'
const url = 'https://api.themoviedb.org/3/'
const apiKey = process.env.VUE_APP_API_KEY

export const useMovieStore = defineStore('movie', {
  state: () => ({
    trending: {},
    mostRated: {},
    loading: false
  }),
  actions: {
    async fetchTrending () {
      this.loading = true
      try {
        const response = await axios.get(url + 'trending/movie/day?language=pt&api_key=' + apiKey)
        this.trending = response.data.results
      } catch (err) {
        console.log(err)
        this.trending = err
      } finally {
        this.loading = false
      }
    },
    async fetchMostRated () {
      this.loading = true
      try {
        const response = await axios.get(url + 'movie/top_rated?api_key=' + apiKey + '&language=pt&page=1')
        this.mostRated = response.data.results
      } catch (err) {
        console.log(err)
        this.mostRated = err
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    getTrending (state) {
      return state.trending
    }
  }
})
