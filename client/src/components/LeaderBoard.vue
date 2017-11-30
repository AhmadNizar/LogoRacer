<template lang="html">
  <div class="alert alert-warning" role="alert">
    <h5 class="alert-heading">Leaderboard!</h5>
    <hr>
    <ul style="list-style: none;" v-for="player in Players">
      <li>name : {{player.username}}<br>score : {{player.score}}</li>
    </ul>
    <hr>
    <p style="font-size:13px;" class="mb-0">Whenever you need</p>
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

<style lang="css">
</style>
