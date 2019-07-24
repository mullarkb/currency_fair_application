<template>
  <!--
  @TO DO:
     - Tidy up css and use the power of less.
     - Fix Fonts
     - Create button function
     - Calculate currency conversion
     - pass step number to steps index
  -->
  <div id="app">
    <Header></Header>
    <div class="page-content">
      <div class="page-left">
        <StepsIndex></StepsIndex>
        <TransactionInfo v-on:next="verifyUser"></TransactionInfo>
        <Footer></Footer>
      </div>
      <DetailsPanel></DetailsPanel>
    </div>
    <IdentityVerification v-if="verifyIdentity" v-on:back="cancelUserVerification"></IdentityVerification>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TransactionInfo from './components/TransactionInfo'
import DetailsPanel from './components/DetailsPanel'
import Footer from './components/Footer'
import StepsIndex from "./components/StepsIndex";
import IdentityVerification from "./components/IdentityVerification";
export default {
  name: 'app',
  components: {
    StepsIndex,
    DetailsPanel,
    TransactionInfo,
    Header,
    Footer,
    IdentityVerification
  },
  data(){
    return{
      verifyIdentity:false,
    }
  },
  methods:{
    verifyUser(){
      this.verifyIdentity = true
    },
    cancelUserVerification(){
      this.verifyIdentity = false
    }
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
    .page-left{
      width: 59%;
      background-color: #ffffff;
      position: relative;
      max-width: 564px;
      margin: 0 56px 0 auto ;
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
