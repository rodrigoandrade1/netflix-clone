<template>
  <div class="container" style="max-width: 94vw">
    <header class="w-100 align-items-center justify-content-between">
      <div class="d-flex">
        <img src="@/assets/logo.svg" class="w-100" alt="Netflix logo">
        <ul class="d-flex align-items-center ">
          <li><router-link to="">Início</router-link></li>
          <li><router-link to="">Séries</router-link></li>
          <li><router-link to="">Filmes</router-link></li>
          <li><router-link to="">Bombando</router-link></li>
          <li><router-link to="">Minha lista</router-link></li>
          <li><router-link to="">Navegar por idiomas</router-link></li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <div id="header-search"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div id="header-child"><span>Infantil</span></div>
        <div id="header-notifications"><i class="fa-solid fa-bell"></i></div>
        <div id="profile-icon">
          <img :src="require('@/assets/profile-icons/' + mainStore.activeUser.icon + '.png')" class="w-100" alt="">
          <i class="fa-solid fa-sort-down"></i>
        </div>
        <!-- <div id="profile-icon">
          <img :src="require('@/assets/profile-icons/01.png')" class="w-100" alt="">
          <i class="fa-solid fa-sort-down"></i>
        </div> -->
      </div>
    </header>

    <div id="backdrop-image"></div>
    <div id="backdrop-shadow"></div>

    <section>
      <div class="row">
        <div class="col-7">
          <h1 id="first-trending-title">{{movieStore.trending[selectTrend].title}}</h1>
          <p id="first-trending-desc">{{movieStore.trending[selectTrend].overview}}</p>

          <div>
            <button id="first-trending-play" class="me-3"><i class="fa-solid fs-2 fa-play text-black"></i> Assistir</button>
            <button id="first-trending-moreinfo"><i class="fa-solid fs-2 fa-circle-info"></i> Mais informações</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12" style="margin-top: 180px">
          <h2>Popular</h2>
          <div class="poster-box d-flex">
            <div class="poster-card" v-for="trend in movieStore.trending" :key="trend.id">
              <img :src="`https://image.tmdb.org/t/p/original/${trend.poster_path}`" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2 style="margin-top: 25px">Melhores avaliados</h2>
          <div class="poster-box d-flex">
          <div class="poster-card" v-for="movie in movieStore.mostRated" :key="movie.id">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="">
          </div>
        </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie'
import { useMainStore } from '@/stores/main'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const mainStore = useMainStore()

const selectTrend = Math.floor(Math.random() * 19)

mainStore.getActiveUser()

onMounted(() => {
  const backdrop = document.getElementById('backdrop-image')
  backdrop.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${movieStore.trending[selectTrend].backdrop_path}')`
})

</script>

<style scoped>
  *{
    color: white;
  }

  header{
    height: 70px;
    display: flex;
    align-items: center;
  }

  header img{
    max-width: 92px;
  }

  li a{
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;
    vertical-align: middle;
  }

  #header-search{
    margin-right: 20px;
    font-size: 23px;
  }

  #header-child{
    margin-right: 20px;
  }

  #header-notifications{
    margin-right: 20px;
    font-size: 18px;
  }

  #profile-icon img{
    max-width: 30px;
    margin-right: 10px;
  }

  #backdrop-image{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -2;
    background-size: cover;
    box-shadow: inset 0px -20px 20px -5px #141414
  }

  #backdrop-shadow{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(32, 32, 32, 0.322);
    z-index: -1;
  }

  #first-trending-title{
    margin-top: 30vh;
    font-size: 3em;
  }

  #first-trending-desc{
    font-size: 20px;
    max-width: 450px;
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #first-trending-play, #first-trending-moreinfo{
    padding: 10px 2.3rem;
    background-color: white;
    color: black;
    border: 0;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 500;
  }

  #first-trending-play:hover{
  background-color: rgba(255, 255, 255, 0.726)
  }

  #first-trending-moreinfo:hover{
    background-color: rgba(145, 145, 146, 0.438);
  }

  #first-trending-moreinfo{
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
  }

  .poster-box{
    overflow-x: hidden;
  }

  .poster-card{
    margin-right: 20px;
    cursor: pointer;
  }

  .poster-card img{
    max-width: 170px;
  }
</style>
