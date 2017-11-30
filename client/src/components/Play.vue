<template>
  <div class="container">
    <div class="row col-md-4 col-md-offset-4">
      <div id="">
        <div class="row">
          <div style="text-align: center; margin-left: 22%;" class="form-group logologo" >
            <img style="padding:30%;" v-bind:src="imageurl"></img>
          </div>
        </div>
        <div style="padding-top: 20%;" action="">
          <label style="color:#999;"></label>
          <div style="text-align: center; margin-left: 20%;" class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="tebak nama logo" v-model="tebakan">
          </div>
          <button class="btn btn-primary" @click="Tebakan">Tebak</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import db from '../firebase'

export default {
  data () {
    return {
      status: '',
      tebakan: '',
      random: [ 'google.com', 'djarum.com', 'unilever.com', 'bumn.go.id', 'bni.co.id' ],
      list: [{
        google: 'google.com',
        djarum: 'djarum.com',
        unilever: 'unilever.com',
        bumn: 'bumn.go.id'
      }],
      tes: '',
      imageurl: '',
      quizkey: '',
      username: localStorage.getItem('username')
    }
  },
  methods: {
    GetLogo () {
      let id = this.random[this.RandomGenerator()]
      axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=' + id)
      // axios.get('https://logo.clearbit.com/google.com')
      .then(({data}) => {
        console.log(data[0])
        this.setFirebase(data[0].logo, data[0].name)
      })
      .catch(err => {
        console.log(err)
      })
    },
    RandomGenerator () {
      return Math.floor(Math.random() * this.random.length)
    },
    Tebakan () {
      console.log('masuk sini')
      if (this.tebakan === this.quizkey) {
        this.status = 'Benar'
        this.GetLogo()
      } else {
        this.status = 'Salah'
      }
    },
    setFirebase (imgUrl, name) {
      db.ref('gamequiz').set({
        imgUrl: imgUrl,
        name: name
      })
    },
    setPlayerScore() {
      db.ref(`players/${this.username}`).set({
        score: 0
      })
    }
  },
  mounted () {
    db.ref('gamequiz').on('value', (response) => {
      this.imageurl = response.val().imgUrl
      this.quizkey = response.val().name
    })

    db.ref(`players/${this.username}`).on('value', (response) => {
      console.log(response.val().name)
    })
  }
}
</script>

<style scoped>
.logologo{
  background:white;
  border: 2px solid white;
  width: 200px;
  height: 200px;
  text-align: center;
}
input{
  width: 70%;
  text-align: center;
  font-size: 19px;
  font-weight: 900;
}
button{
  width: 30%;
}
#tengah{
  position: relative;
  margin-top: 70%;
  transform: translateY(-50%);
}
</style>
