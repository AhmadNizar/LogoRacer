<template>
  <div>
    <input type="text" v-model="tebakan" v-on:click="Tebakan()">
    <h1>{{status}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
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
      }]
    }
  },
  methods: {
    GetLogo () {
      let id = this.random[this.RandomGenerator()]
      console.log(this.random[this.RandomGenerator()])
      axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=' 
      + id )
      // axios.get('https://logo.clearbit.com/google.com')
      .then(({data}) => {
        this.jawaban = data
        // console.log(this.jawaban)
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
  },
  created () {
    this.GetLogo()
    
  }
}
</script>

<style>

</style>
