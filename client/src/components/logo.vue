<template>
  <div class="form">
    <textarea name="name" v-model="domain" rows="8" cols="80">Masukan Domain</textarea>
    <button type="button" value="submit" @click="getDomain" name="button">Submit</button>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Clearbit',
    data () {
      return {
        clearbit: '',
        domain: ''
      }
    },
    methods: {
      getDomain: function () {
        axios.get(`https://logo.clearbit.com/${this.domain}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>
