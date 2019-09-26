<template>
  <div id="app">
    <Navbar/>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }  
}
</script>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
</style>
