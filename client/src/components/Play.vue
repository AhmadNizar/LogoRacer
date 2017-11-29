<template>
  <div class="container">
    <div class="row col-md-4 col-md-offset-4">
    <div id="">
      <div class="row">
        <div style="text-align: center; margin-left: 22%;" class="form-group logologo">
          <p style="padding:30%;">logo disini</p>
        </div>
      </div>
      <form style="padding-top: 20%;" action="">
        <label style="color:#999;">###</label>
        <div style="text-align: center; margin-left: 20%;" class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="tebak nama logo">
        </div>
      <button type="submit" class="btn btn-primary">TEBAK</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {

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
