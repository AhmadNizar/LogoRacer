<template>
  <div class="row col-md-4 col-md-offset-4">
    <div id="tengah">
      <div @submit.prevent="toPlay">
          <label style="color:#999;">Input name player</label>
          <div style="text-align: center; margin-left: 20%;" class="form-group">
            <input v-model="player" type="text" class="form-control" id="exampleInputEmail1" placeholder="player">
          </div>
          <button @click="registerPlayers" class="btn btn-primary">PLAY</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import db from '../firebase'

export default {
  name: 'Register',
  components: {
    Loader
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    registerPlayers () {
      db.ref(`players/${this.username}`).set({
        username: this.username,
        score: 0
      })
      .then(() => {
        console.log('masuk sini')
      })
    }
  }
}
</script>

<style scoped>
input{
  width: 70%;
  text-align: center;
  font-size: 19px;
  font-weight: 900;
}
button{
  width: 30%;
}
body{
  width: 400px;
  margin:auto;
  text-align: center;
  background-color: #CCC;
}
#tengah{
  position: relative;
  margin-top: 70%;
  transform: translateY(-50%);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
