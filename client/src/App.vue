<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Register from '@/components/Register'

export default {
  name: 'app',
  components: {
    Loader,
    Register
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
body {
  background: #1d0e28;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
