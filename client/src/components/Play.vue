<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <img class="" style="padding:30%;" :src="imageurl">logo disini</img>
        <div style="padding-top: 20%;">
          <div class="form-group">
            <input type="text" class="eightbit-btn" placeholder="nama logo">
          </div>
          <a class="eightbit-btn eightbit-btn--proceed" @click="Tebakan">Tebak</a>
        </div>
      </div>
    </div>
    <div class="col-md-3 leaderboard">
      <div class="alert alert-warning" role="alert">
        <h5 class="alert-heading">Leaderboard!</h5>
        <hr>
        <ul style="list-style: none;">
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </ul>
        <hr>
        <p style="font-size:13px;" class="mb-0">Whenever you need</p>
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
      quizkey: ''
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
    }
  },
  mounted () {
    db.ref('gamequiz').on('value', (response) => {
      this.imageurl = response.val().imgUrl
      this.quizkey = response.val().name
    })
  }
}
</script>

<style scoped>
.leaderboard{
  text-align: left;
  top: 2%;
  right: 0;
  position: absolute;
}
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
/* #tengah{
  position: relative;
  margin-top: 70%;
  transform: translateY(-50%);
} */
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
