<template>
  <div class="eyes">
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.eyes {
  width: 108px;
  height: 54px;
  position: absolute;
  top: -30%;
  left: 50%;
  margin-top: -27px;
  margin-left: -54px;
}
.eye {
  position: relative;
  background: #FFF;
  width: 50px;
  height: 50px;
  float: left;
  margin: 2px;
  overflow: hidden;
  animation: rotate 4s infinite;
}

.eye::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: #1d0e28;
  animation: eye 4s infinite;
}

.eye::before,
.eye {
  border-radius: 50%;
  -webkit-border-radius: 50%;
}

@keyframes rotate {
  
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  62.5% {
    transform: rotate(-90deg);
  }
  87.5% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  62.5% {
    transform: rotate(-90deg);
  }
  87.5% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes eye {
  
  0% {
    top: 15px;
    left: 15px;
  }
  12.5% {
    top: 15px;
    left: 5px;
  }
  25% {
    top: 15px;
    left: 15px;
  }
  37.5% {
    top: 15px;
    left: 25px;
  }
  50% {
    top: 15px;
    left: 15px;
  }
  62.5% {
    top: 5px;
    left: 15px;
  }
  87.5% {
    top: 5px;
    left: 15px;
  }
  100% {
    top: 15px;
    left: 15px;
  }
}
@-webkit-keyframes eye {
  0% {
    top: 15px;
    left: 15px;
  }
  12.5% {
    top: 15px;
    left: 5px;
  }
  25% {
    top: 15px;
    left: 15px;
  }
  37.5% {
    top: 15px;
    left: 25px;
  }
  50% {
    top: 15px;
    left: 15px;
  }
  62.5% {
    top: 5px;
    left: 15px;
  }
  87.5% {
    top: 5px;
    left: 15px;
  }
  100% {
    top: 15px;
    left: 15px;
  }
}
</style>
