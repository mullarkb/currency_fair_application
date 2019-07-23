<template>
  <div id="footer">
    <div class="copyright">
      &#0169 2016 CurrencyFair
    </div>
    <div class="links">
      <a href="#">Help & Support</a>
      <a href="#">Legal Stuff</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="less" scoped>
  #footer{
    width: 100%;
    max-width: 564px;
    display: inline-flex;
    font-size: 1.2rem;
    line-height: 1.8px;
    border-top: solid 1px #EEEEEE;
    padding-top: 25px;
    margin: 0 auto;
    &>div{
      width: 50%;
    }
    .copyright{
      color: #BDBDBD;
    }
    .links{
      text-align: right;
      a{
        text-decoration: none;
        color: #64B5F6;
        padding-left: 15px;
      }
    }
  }
</style>
