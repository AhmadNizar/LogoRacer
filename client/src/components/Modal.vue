<template>
  <div id="myModal" class="modal fade modal-body" style="position: absolute; padding-top: 15%;">
    <div class="container-fluid">
      <div class="row">
        <div style="padding-bottom: 2%;" class="col-sm-12">
          <div class="row">
            <div class="col-4 col-sm-3">
            </div>
            <div class="col-4 col-sm-6">
              <h3>a mini game</h3>
              <h1>LOGO RACER</h1>
            </div>
            <div class="col-4 col-sm-3">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div style="padding-bottom: 5%; color: white; font-size: 18px;" class="col-md-12 ml-auto">
          your scoore is ...
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-4 col-sm-3">
            </div>
            <div class="col-4 col-sm-6">
              <a class="eightbit-btn eightbit-btn--proceed">Share</a>
              <a @click="playAgain" class="eightbit-btn eightbit-btn--proceed">Play Again</a>
              <a @click="quit" class="eightbit-btn eightbit-btn--proceed">Quit</a>
            </div>
            <div class="col-4 col-sm-3">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    quit () {
      localStorage.removeItem('username')
      window.location='/'
    },
    playAgain () {
      // 
    }
  }
}
</script>

<style scoped>
input{
  text-align: center;
  font-size: 19px;
  font-weight: 900;
}
button{
  width: 30%;
}

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
