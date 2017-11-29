<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import db from './firebase'
export default {
  name: 'app',
  methods: {
    addPlayers () {
      db.ref('players/').set({
        username: 'AhmadNizar',
        score: 0
      })
    }
  },
  created () {
    this.addPlayers()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
