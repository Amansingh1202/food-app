<template>
  <div>
    <div class="content">
    <app-menu></app-menu>
    <Nuxt />
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue';
import Footer from '@/components/Footer.vue';
export default {
  components:{
    AppMenu,
    Footer
  }
}
</script>

<style>
html {
  font-family:
    'Mullish',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,h2,h3,h4{
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 600;
}
</style>
