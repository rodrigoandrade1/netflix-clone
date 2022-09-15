<template>
  <div class="container-fluid">
    <header>
      <img src="@/assets/logo.svg" class="w-100" alt="Netflix logo">
    </header>
    <section>
      <Transition name="fade" appear>
        <div class="row">
          <div class="col-12">
            <div id="main-content" class="d-flex justify-content-center flex-column align-items-center">
              <h1 class="text-white">Quem está assistindo?</h1>
              <ul id="profiles" class="d-flex" style="list-style-type: none;">
                <li id="profile" v-for="profile in $store.state.profiles" :key="profile.id">
                <img v-if="profile.icon" :src="require('@/assets/profile-icons/' + profile.icon + '.png')" alt="">
                <img v-else src="@/assets/profile-icons/115.png" alt="">
                <span id="profile-name"> {{ profile.name }}</span>
                </li>
              </ul>
              <router-link :to="{ name: 'manageprofiles' }" id="manage-profile">Gerenciar perfis</router-link>
            </div>
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup>
// import { useStore } from 'vuex'
// const store = useStore()

// store.dispatch('fetchProfiles')

</script>

<style scoped>
  header{
    height: 70px;
    display: flex;
    align-items: center;
  }

  header>img{
    max-width: 92px;
    margin-left: 50px;
  }

  #main-content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #main-content>h1{
    font-size: 3.5vw;
    cursor: default;
  }

  #profiles{
    margin: 2em 0;
  }

  #profile{
    margin: 0 2vw 0 0;
    cursor: pointer;
  }

  #profile>img{
    height: 10vw;
    border-radius: 4px;
  }

  #profile:hover > img{
    outline: 0.3em solid white;
    outline-offset: -4px;
  }
  #profile:hover > #profile-name{
    color: white;
  }

  #profile-name{
    display: block;
    color: grey;
    font-size: 1.3vw;
    line-height: 1.2em;
    margin: 0.6em 0;
    text-align: center;
  }

  #manage-profile{
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    font-size: 1.2vw;
    margin: 2em 0 1em;
    padding: 0.4em 1.7em;
    text-decoration: none;
  }

  #manage-profile:hover{
    color: white;
    border: 1px solid white;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
