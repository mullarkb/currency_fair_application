<template>
  <div id="header">
    <div class="logo">
      <img src="../assets/images/CF_logo_RGB_NEG.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
    #header{
      background-color: #32323C;
      height: 66px;
      width: 100%;
      .logo {
        margin: 5px 10%;
        width: 131px;
        position: absolute;
        @media (max-width: 650px){
          margin: 5px;
        }
        img {
          width: 100%;
          height: 55px;
        }
      }
    }
</style>
