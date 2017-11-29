<template>
  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      random: [ 'google.com', 'djarum.com', 'unilever.com', 'bumn.go.id', 'bni.co.id' ],
      list: {
        google: 'google.com',
        djarum: 'djarum.com',
        unilever: 'unilever.com',
        bumn: 'bumn.go.id'
      }
    }
  },
  methods: {
    RandomGenerator () {
      let hasil = Math.floor(Math.random() * this.random.length)
      return hasil
    }
  },
  created () {
    console.log()
    axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=' 
    + this.random[this.RandomGenerator()] + '&size=200')
    // axios.get('https://logo.clearbit.com/google.com')
    .then(({data}) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
