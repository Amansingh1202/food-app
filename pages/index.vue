<template>
  <main class="container">
    <app-header></app-header>
    <app-restaurant-info :datasource="fooddata"></app-restaurant-info>
  </main>
</template>

<script>

import { mapState } from 'vuex';

import AppHeader from '@/components/AppHeader.vue';
import AppRestaurantInfo from '../components/AppRestaurantInfo.vue';
export default {
  components:{
    AppHeader,
    AppRestaurantInfo,
  },
  computed:{
    ...mapState([
      'fooddata'
    ])
  }
}
</script>

<style>
</style>
