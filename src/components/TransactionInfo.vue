<template>
  <!--
  @TO DO:
     - Tidy up css and use the power of less.
     - Create button function
     - Calculate currency conversion
     - Break steps out into its own component
  -->
  <div id="transaction-info">
    <div class="steps">
      <div class="step selected">
        <div class="content">
          <p class="small">Step 1</p>
          <p>Transaction info</p>
        </div>
      </div>
      <div class="step">
        <div class="content">
        <p class="small" >Step 2</p>
        <p>Recipient info</p>
        </div>
      </div>
      <div class="step">
        <div class="content">
        <p class="small">Step 3</p>
        <p>Make payment</p>
        </div>
      </div>
    </div>
    <div class="section-title">
      <h2>Let's set up your transaction!</h2>
      <p>Specify the amount to be sent or received</p>
    </div>
    <div class="money">
      <div class="send">
        <p>You Send</p>
        <h3>€2,000<span class="cent">.00</span></h3>
      </div>
      <div class="currency">
        <div class="currency-inner">
          <img src="../assets/images/EUR.png" />
          <h4>EUR</h4>
        </div>
      </div>
      <div class="receive">
        <p>Receiver Gets</p>
        <h3>£1,717<span class="cent">.94</span></h3>
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
    export default {
        name: "TransactionInfo"
    }
</script>

<style lang="less" scoped>
  #transaction-info {
    background-color: #ffffff;
    position: relative;
    max-width: 564px;
    width: 100%;
    margin: 0 auto;
    h2{
      font-size: 1.8rem;
      margin: 0;
      color: #212121;
      font-weight: 400;
    }
    .steps {
      text-align: center;
      display: inline-flex;
      width: 100%;
      margin-top: 53px;
      .step{
        width: 100%;
        text-align: center;
        border-style: solid;
        border-width: 0 0 4px 0;
        border-color: rgba(110, 192, 230, 0.2);
        .content{
          text-align: center;
          display: inline-block;
          padding: 21px;
        }
        p {
          text-align: left;
          color: #B0BEC5;
          font-size: 1.4rem;
          line-height: 1.5;
          margin: 0;
          &.small{
            font-size: 1.2rem;
          }
        }
      }
      .selected {
        border-color: #6EC0E6;
        p {
          color: #6EC0E6;
        }
      }
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
        h3{
          font-size: 2.8rem;
          margin: 0;
          line-height: 38px;
          .cent{
            font-size: 1.8rem;
          }
        }
        p{
          text-transform: uppercase;
          line-height: 38px;
        }
      }
      .send {
        background: rgba(110, 192, 230, 0.03);
        border-color: #6EC0E6;
        border-radius: 4px 4px 0 0;
        p{
          color: #6EC0E6;
        }
      }
      .receive {
        border: solid 1px #e6e6e6;
        border-radius: 0 0 4px 4px;
        background: #ffffff;
        p{
          color: #9E9E9E;
        }
      }
      .currency{
        position: absolute;
        right: 24px;
        transform: translateY(-74px);
        width: 90px;
        height: 47px;
        text-align: center;
        border: 1px solid #E0E0E0;
        border-radius: 24px 4px 4px 24px;
        background-color: #ffffff;
        .currency-inner {
          display: inline-flex;
          transform: translateY(30%);
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
      background-color: #6EC0E6;
      border: solid 1px #589AB8;
      border-radius: 4px;
      font-size: 1.6rem;
      line-height: 21px;
      color: #ffffff;
      padding: 14px 18px;
      display: inline-block;
      margin: 36px 0 60px 0;
    }
  }
</style>
