<template>
  <div class="container">
    <div style="margin-top: 20%;" class="row">
      <div class="col-md-6 offset-md-3">
       <form style="padding-top: 0%;">
         <h3>a mini game</h3>
         <h1>LOGO RACER</h1>

        <label style="padding-top:10%; font-size:13px; color:#999;">input player name</label>
        <div class="form-group">
          <input v-model="username" name="player" type="text" class="eightbit-btn" placeholder="player">
        </div>
        <a @click="registerPlayers" class="eightbit-btn eightbit-btn--proceed">Play Game</a>
      </form>
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
      console.log('masuk sini')
      db.ref(`players/${this.username}`).set({
        username: this.username,
        score: 0
      })
      .then(res => {
        localStorage.setItem('username', this.username)
        this.$router.push({ name: 'MainBoard' })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
/* .logologo{
  background:white;
  border: 2px solid white;
  width: 200px;
  height: 200px;
} */
input{
  /* width: 70%; */
  text-align: center;
  font-size: 19px;
  font-weight: 900;
}
button{
  width: 30%;
}

.eightbit-btn {
  background: white;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 18px;
  padding: 13px;
  /* font-family: 'Press Start 2P', cursive; */
  text-decoration: none;
  color: black;
  box-shadow: inset -4px -4px 0px 0px gray;
}
.eightbit-btn:hover, .eightbit-btn:focus {
  background: white;
  box-shadow: inset -6px -6px 0px 0px gray;
}
.eightbit-btn:active {
  box-shadow: inset 4px 4px 0px 0px gray;
}
.eightbit-btn:before, .eightbit-btn:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
}
.eightbit-btn:before {
  top: -6px;
  left: 0;
  border-top: 6px black solid;
  border-bottom: 6px black solid;
}
.eightbit-btn:after {
  left: -6px;
  top: 0;
  border-left: 6px black solid;
  border-right: 6px black solid;
}
.eightbit-btn--reset {
  background: #E76E55;
  box-shadow: inset -4px -4px 0px 0px #8C2022;
}
.eightbit-btn--reset:hover, .eightbit-btn--reset:focus {
  background: #CE372B;
  box-shadow: inset -6px -6px 0px 0px #8C2022;
}
.eightbit-btn--reset:active {
  box-shadow: inset 4px 4px 0px 0px #8C2022;
}
.eightbit-btn--proceed {
  background: #F7D51D;
  box-shadow: inset -4px -4px 0px 0px #E59400;
}
.eightbit-btn--proceed:hover, .eightbit-btn--proceed:focus {
  background: #F2C409;
  box-shadow: inset -6px -6px 0px 0px #E59400;
}
.eightbit-btn--proceed:active {
  box-shadow: inset 4px 4px 0px 0px #E59400;
}

*, *:before, *:after {
  box-sizing: border-box;
}

hr {
  margin: 40px auto;
  max-width: 100px;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
}

.pen-intro {
  text-align: center;
}

</style>
