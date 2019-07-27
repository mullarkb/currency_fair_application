<template>
  <div id="transaction-info">
    <div class="section-title">
      <h2>Let's set up your transaction!</h2>
      <p>Specify the amount to be sent or received</p>
    </div>
    <div class="money">
      <div class="send">
        <p>You Send</p>
        <div class="input-wrap">
          <h3>€</h3>
          <vue-numeric
                       separator=","
                       :precision=2
                       v-model="sendValue"
                       placeholder="0.00"
          />
        </div>
      </div>
      <div class="currency">
        <div class="currency-inner">
          <img src="../assets/images/EUR.png" />
          <h4>EUR</h4>
        </div>
      </div>
      <div class="receive">
        <p>Receiver Gets</p>
        <div class="input-wrap">
          <h3>£</h3>
          <vue-numeric
                       separator=","
                       :precision=2
                       v-model="receiveValue"
                       placeholder="0.00"
          />
        </div>
      </div>
      <div class="currency">
        <div class="currency-inner">
        <img src="../assets/images/GBP.png" />
        <h4>GBP</h4>
        </div>
      </div>
    </div>
    <div class="next-button" @click="next()">
      Next
    </div>
  </div>
</template>

<script>
// used vue numeric to save time on live input formatting. Would probably do the whole thing manually if designer was keen on smaller font decimal points  https://www.npmjs.com/package/vue-numeric
import VueNumeric from 'vue-numeric'
export default {
  name: 'TransactionInfo',
  components: {
    VueNumeric
  },
  data () {
    return {
      userInput: {
        send: 0,
        receive: 0
      },
      sendValue: 0,
      receiveValue: 0,
      verifyIdentity: false
    }
  },
  props: [
    'conversion',
    'fee'
  ],
  mounted () {
    // if a default send value is set, convert it
    this.convertSendValue()
  },
  methods: {
    convertSendValue () {
      this.receiveValue = (this.sendValue * this.conversion) - this.fee
      // display 0 if the converted rated is less than the fee
      if (this.receiveValue < 0) {
        this.receiveValue = 0
      }
      // fix values to 2 decimal places and emit back to parent
      this.userInput.send = this.sendValue.toFixed(2)
      this.userInput.receive = this.receiveValue.toFixed(2)
      this.$emit('exchange', this.userInput)
    },
    convertReceiveValue () {
      // add the fee before reverse conversion
      this.sendValue = (this.receiveValue + this.fee) * (1 / this.conversion)
      // fix values to 2 decimal places and emit back to parent
      this.userInput.send = this.sendValue.toFixed(2)
      this.userInput.receive = this.receiveValue.toFixed(2)
      this.$emit('exchange', this.userInput)
    },
    next () {
      // tell parent next button was clicked
      this.$emit('next')
    }
  },
  watch: {
    // if the you send input changes, convert the value
    sendValue () {
      this.convertSendValue()
    },
    // if the receiver input changes, convert the value
    receiveValue (newVal) {
      // only bother to convert if the value is greater than 0
      if (newVal > 0) {
        this.convertReceiveValue()
      }
    }
  }

}
</script>

<style lang="less" >
  @import '../assets/less/variables.less';
  #transaction-info {
    position: relative;
    width: 100%;
    h2{
      font-size: 1.8rem;
      margin: 0;
      color: @text-dark-grey;
      font-weight: 400;
    }
    .section-title{
      text-align: left;
      line-height: 27px;
      margin: 45px 0 29px 0;
      p{
        color: #757575;
        margin: 0;
      }
    }
    .money {
      text-align: left;
      .send, .receive {
        padding: 9.5px 24px;
        border-style: solid;
        border-width: 1px;
        h3, input{
          font-size: 2.8rem;
          font-family: PostGrotesk-Medium;
          color: @text-dark-grey;
          font-weight: 400;
          margin: 0 10px 0 0;
          line-height: 38px;
          padding: 0;
          .cent{
            font-size: 1.8rem;
          }
        }
        p{
          text-transform: uppercase;
          line-height: 38px;
        }
        .input-wrap{
          display: inline-flex;
        }
        ::placeholder{
          color: @text-dark-grey;
        }
        input{
          border-style: none;
          background: transparent;
          &:active, &:focus{
            border-style: none;
            outline: none;
          }
        }
      }
      .send {
        background: rgba(110, 192, 230, 0.03);
        border-color: @brand-blue;
        border-radius: 4px 4px 0 0;
        p{
          color: @brand-blue;
        }
      }
      .receive {
        border: solid 1px #e6e6e6;
        border-radius: 0 0 4px 4px;
        background: #ffffff;
        p{
          color: @text-light-grey;
        }
      }
      .currency{
        position: absolute;
        right: 24px;
        transform: translateY(-71.5px);
        width: 90px;
        height: 45px;
        text-align: center;
        border: 1px solid #E0E0E0;
        border-radius: 24px 4px 4px 24px;
        background-color: #ffffff;
        &:last-child{
          background-color:@background-grey-secondary;
        }
        .currency-inner {
          display: inline-flex;
          transform: translateY(8px);
          h4 {
            font-size: 1.6rem;
            color: #616161;
            line-height: 30px;
            font-family: 'PostGrotesk-Bold';
            margin: 0 0 0 10px;
          }

          img {
            width: 21px;
            height: 21px;
            transform: translateY(5px);
          }
        }
      }
    }
    .next-button{
      background-color: @brand-blue;
      border: solid 1px #589AB8;
      border-radius: 4px;
      font-size: 1.6rem;
      line-height: 21px;
      color: #ffffff;
      padding: 14px 18px;
      display: inline-block;
      margin: 36px 0 50px 0;
      cursor: pointer;
    }
  }
</style>
