<template>
  <router-view/>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie'
import { onMounted } from 'vue'
const movieStore = useMovieStore()

onMounted(() => {
  movieStore.fetchTrending()
  movieStore.fetchMostRated()
})

</script>
<style>
  body{
    background-color: #141414 !important;
    user-select: none;
    overflow-x: hidden;
  }
  ul{
    list-style-type: none;
  }
</style>
