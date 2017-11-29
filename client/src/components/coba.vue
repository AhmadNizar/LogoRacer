<template>
  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      random: ['google.com','djarum.com','unilever.com','bumn.go.id' ],
      list: {
        google: 'google.com',
        djarum: 'djarum.com',
        unilever: 'unilever.com',
        bumn: 'bumn.go.id'
      } 
    }
  },
created () {
  axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=google')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
