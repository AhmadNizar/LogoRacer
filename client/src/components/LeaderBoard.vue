<template lang="html">
  <div class="alert borderpboard" role="alert">
    <h5 class="alert-heading">Leaderboard!</h5>
    <hr style="background: white;">
    <ul style="list-style: none;" v-for="player in Players">
      <li>name : {{player.username}}<br>score : {{player.score}}</li>
    </ul>
    <hr style="background: white;">
    <p style="font-size:13px;" class="mb-0">
      <marquee>
        PEMENANG UTAMA AKAN MEMENANGKAN LIBURAN KE JEPANG  
      </marquee>
    </p>
  </div>

</template>

<script>
import db from '../firebase'
export default {
  data () {
    return {
      Players: []
    }
  },
  methods: {
    sortingPemain (pemain) {
      return pemain.sort((a, b) => {
        return b.score - a.score
      })
    }
  },
  mounted () {
    db.ref('players').on('value', (response) => {
      let pemains = Object.keys(response.val())
      let arrPemain = []

      pemains.forEach(pemain => {
        arrPemain.push({
          username: pemain,
          score: response.val()[pemain].score
        })
      })

      if (arrPemain.length > 5) {
        this.sortingPemain(arrPemain).splice(5, arrPemain.length - 5)
        this.Players = this.sortingPemain(arrPemain)
      } else {
        this.Players = this.sortingPemain(arrPemain)
      }
    })
  }
}
</script>

<style scoped>
.borderpboard{
  color: #e9ecef;
  /* background-color: #fff3cd; */
  border-color: #f8f9fa;
}
.leaderboard{
  text-align: left;
  top: 2%;
  right: 0;
  position: absolute;
}
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
</style>
