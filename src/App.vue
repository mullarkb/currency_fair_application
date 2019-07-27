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
        <TransactionInfo
          :conversion="conversionRate"
          :fee="conversionFee"
          v-on:exchange="updateDetails"
          v-on:next="verifyUser">
        </TransactionInfo>
        <Footer v-if="desktop"></Footer>
      </div>
      <DetailsPanel
        :details="transferDetails"
      ></DetailsPanel>
      <Footer v-if="mobile"></Footer>
    </div>
    <IdentityVerification v-if="verifyIdentity"
                          v-on:back="cancelUserVerification"
    ></IdentityVerification>
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
      conversionRate: null,
      conversionFee:null,
      transferDetails:{
        send:0,
        receive:0,
        rate: 0.86022,
        fee: 2.50,
        saving: 66.19,
        delivery: '25th November'
      },
      mobile: false,
      desktop: true,
    }
  },
  mounted(){
    //api calls to receive conversion fees etc.. assigning values for now
    this.conversionRate = 0.86022
    this.conversionFee = 2.50
    if (window.innerWidth < 769){
      this.mobile = true
      this.desktop = false
    }
    window.addEventListener('resize', this.onResize)
  },
  methods:{
    updateDetails(data){
      this.transferDetails.send = data.send
      this.transferDetails.receive = data.receive
    },
    verifyUser(){
      this.verifyIdentity = true
    },
    cancelUserVerification(){
      this.verifyIdentity = false
    },
    onResize(){
      if (window.innerWidth < 769){
        this.mobile = true
        this.desktop = false
      }else{
        this.mobile = false
        this.desktop = true
      }
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
}
</style>
