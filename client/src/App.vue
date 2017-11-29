<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Register from '@/components/Register'
import db from './firebase'

export default {
  name: 'app',
  components: {
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
  background: #1f1f1f;
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
