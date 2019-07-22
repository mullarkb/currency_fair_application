<template>
  <div id="app">
    <Header></Header>
    <TransactionInfo></TransactionInfo>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TransactionInfo from './components/TransactionInfo'

export default {
  name: 'app',
  components: {
    TransactionInfo,
    Header
  }
}
</script>

<style lang="less">
  @import "./assets/less/master.less";
#app {
  font-family: 'PostGrotesk-Medium', Arial, sans-serif;
  background-color: #ffffff;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 10px;

  p {
    font-size: 1.4rem;
    line-height: 1.5;
    margin: 0;
  }
}
</style>
