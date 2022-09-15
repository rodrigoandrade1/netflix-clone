import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useMainStore = defineStore('main', {
  state: () => ({
    profiles: [
      {
        id: 0,
        name: 'Rodrigo',
        icon: '01'
      },
      {
        id: 1,
        name: 'Jurema',
        icon: '02'
      },
      {
        id: 2,
        name: 'Giovanna',
        icon: '03'
      },
      {
        id: 3,
        name: 'Pablo',
        icon: '04'
      },
      {
        id: 4,
        name: 'Cleiton',
        icon: '05'
      }
    ],
    activeUser: {}
  }),
  actions: {
    setProfiles: function (profiles) {
      this.profiles = profiles
    },
    setActiveUser: function (profile) {
      this.activeUser = profile
      this.saveActiveUser()
    },
    saveActiveUser: function () {
      localStorage.setItem('activeUser', JSON.stringify(this.activeUser))
    },
    getActiveUser: function () {
      if (localStorage.getItem('activeUser') != null) {
        const retrieveUser = localStorage.getItem('activeUser')
        this.activeUser = JSON.parse(retrieveUser)
      } else {
        const router = useRouter()
        router.push({ name: 'whowatching' })
      }
    }
  },
  getters: {
  }
})
