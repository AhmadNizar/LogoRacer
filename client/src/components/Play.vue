<template>
  <div class="container">
    <div class="row col-md-4 col-md-offset-4">
    <div id="">
      <div class="row">
        <div style="text-align: center; margin-left: 22%;" class="form-group logologo" >
          <img style="padding:30%;" v-bind:src="getFirebase"></img>
        </div>
      </div>
      <form style="padding-top: 20%;" action="">
        <label style="color:#999;">###</label>
        <div style="text-align: center; margin-left: 20%;" class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="tebak nama logo">
        </div>
      <button type="submit" class="btn btn-primary">{{ getFirebase }}</button>
      </form>
    </div>
  </div>

  <p>{{ getFirebase }}</p>
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
      jawaban: [],
      random: [ 'google.com', 'djarum.com', 'unilever.com', 'bumn.go.id', 'bni.co.id' ],
      list: [{
          google: 'google.com',
          djarum: 'djarum.com',
          unilever: 'unilever.com',
          bumn: 'bumn.go.id'
      }],
      tes: ''
    }
  },
  methods: {
    GetLogo () {
      let id = this.random[this.RandomGenerator()]
      axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=' 
      + id )
      // axios.get('https://logo.clearbit.com/google.com')
      .then(({data}) => {
        console.log(data[0])
        this.setFirebase (data[0].logo, data[0].name)
        this.jawaban = data
      })
      .catch(err => {
        console.log(err)
      })
    },
    RandomGenerator () {
      return Math.floor(Math.random() * this.random.length)
    },
    Tebakan () {
      console.log(this.jawaban[0].name)
      if(this.tebakan == this.jawaban[0].name){
        this.status = 'Benar' 
        this.GetLogo()
      }
      else{
        this.status = 'Salah'
      }
    },
    setFirebase (imgUrl, name) {
      db.ref('gamequiz').set({
        imgUrl: imgUrl,
        name: name
      })
    },
  },
  computed: {
    getFirebase () {
      db.ref('gamequiz').on('value', function(response) {
        return response.val().imgUrl
      })
    }
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
