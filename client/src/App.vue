<template>
  <div id="app">
    <!-- <loader/> -->
    <router-view/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Register from '@/components/Register'
// import db from './firebase'

export default {
  name: 'app',
  components: {
    Register,
    Loader
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
*{
  padding: 0px;
  margin: 0px;
}
body {
  background: #1f1f1f;
}
#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: none;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* font-family: '8BITWONDERNominal'; 
   font-weight: normal; 
   font-style: normal;  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 4vw;
  color: white;
  text-shadow: 0 0.25em 0 rgba(0, 0, 0, 0.5);
}
 
h2 {
  font-size: 3rem;
  position: absolute;
  top: 64%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-weight: 200;
  text-transform: uppercase;
  line-height: 1.4;
  text-shadow: 0 0.25em 0 rgba(0, 0, 0, 0.5);
}
 
h3 {
  font-size: 1rem;
  color:white;
  text-shadow: 0 0.25em 0 rgba(0, 0, 0, 0.5);
}
 
h4 {
  font-size: 1rem;
  color:white;
  text-shadow: 0 0.25em 0 rgba(0, 0, 0, 0.5);
}
</style>
