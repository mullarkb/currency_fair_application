<template>
  <div id="app">
    <Header></Header>
    <div class="page-content">
      <TransactionInfo></TransactionInfo>
      <DetailsPanel></DetailsPanel>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TransactionInfo from './components/TransactionInfo'
import DetailsPanel from './components/DetailsPanel'

export default {
  name: 'app',
  components: {
    DetailsPanel,
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
  height: 100vh;
  p {
    font-size: 1.4rem;
    line-height: 1.5;
    margin: 0;
  }
  .page-content{
    width:100%;
    display: inline-flex;
    #transaction-info{
      width: 59%;
    }
    #details-panel{
      height: 100vh;
      width:41%;
      background-color: #FBFBFB;
      border-left: solid 1px #E0E0E0;
    }
  }
}
</style>
