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
        <StepsIndex :step="step"></StepsIndex>
        <TransactionInfo
          :conversion="transferDetails.rate"
          :fee="transferDetails.fee"
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
    <IdentityVerification
      v-if="verifyIdentity"
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
      transferDetails:{
        send:0,
        receive:0,
        rate: 0,
        fee: 0,
        saving: 0,
        delivery: '25th November'
      },
      step: 1,// change this to 2 or 3 to see the index change
      mobile: false,
      desktop: true,
    }
  },
  mounted(){
    //api calls to receive conversion fees etc, would use vuex for scalability... assigning values for now.
    this.transferDetails.rate = 0.86022
    this.transferDetails.fee = 2.50

    //set conditional mobile and desktop classes for footer placement
    if (window.innerWidth < 769){
      this.mobile = true
      this.desktop = false
    }
    //watch for window resize
    window.addEventListener('resize', this.onResize)
  },
  methods:{
    updateDetails(data){
      //when data is emitted from transactionInfo component, send it back to the DetailsPanel component
      this.transferDetails.send = data.send
      this.transferDetails.receive = data.receive
      //probably want to call another function here to work out the saving
      this.transferDetails.saving = 66.19
    },
    verifyUser(){
      //show the identityVerification component
      this.verifyIdentity = true
    },
    cancelUserVerification(){
      //hide the identityVerification component
      this.verifyIdentity = false
    },
    onResize(){
      //if the layout is going to be stacked, move the footer to the bottom of screen
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
