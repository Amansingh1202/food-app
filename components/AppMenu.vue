<template>
  <nav>
      <ul>
          <li><nuxt-link exact to="/"><app-logo></app-logo></nuxt-link></li>
          <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
      </ul>
      <div class="smallnum">{{ numberFoodItems }}</div>
      <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
export default {
  components:{
    AppLogo
  },
  computed:{
    numberFoodItems(){
      return this.$store.getters.getNumberFoodItems
    }
  }
}
</script>

<style>

</style>