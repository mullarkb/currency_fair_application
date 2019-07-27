<template>
  <!--
    @TODO
     - make sms number look good
     - fix footer button appearance
   -->
  <div id="identity-verification">
    <div class="identity-card">
      <div class="card-header">
        <h2><img src="../assets/images/padlock.png">Identity verification required</h2>
        <p>For your security, we occasionally require you to verify your identity by entering a code sent you your mobile device</p>
      </div>
      <div class="card-body">
        <p>Enter the code sent via SMS to
          <span class="country-code">{{phoneNumber.countryCode}}</span>
          <span class="phone-number">{{phoneNumber.number}}</span>
        </p>
        <div class="code-input">
          <vue-verification-code :style="codeStyle" :type="'number'" :maxlength="6" @output="codeOutput"></vue-verification-code>
        </div>
        <div class="receive-code">
          <div class="new-code">
            <img src="../assets/images/refresh.png">
            <a href="#">Receive a new code</a>
          </div>
          <div class="code-via-call">
            <img src="../assets/images/call.png">
            <a href="#">Receive a code via call instead</a>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="footer-left">
          <a @click="verify" class="button button-blue" :class="{locked: !codeEntered}">Verify Identity</a>
          <a @click="back" class="button button-white">Back</a>
        </div>
        <div class="footer-right">
          <a href="#" class="link-blue">I can't access this mobile device</a>
        </div>
        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdentityVerification',
  data () {
    return {
      phoneNumber: {
        countryCode: '+353',
        number: '872251177'
      },
      codeStyle: {
        color: '#768895'
      },
      verificationCode: null,
      codeEntered: false
    }
  },
  methods: {
    codeOutput (event) {
      this.verificationCode = event.data
      if (event.isfinished) {
        this.codeEntered = true
      } else {
        this.codeEntered = false
      }
    },
    verify () {
      // function to verify the entered code
    },
    back () {
      this.$emit('back')
      console.log('back')
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/variables.less';
  #identity-verification{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.75);
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .identity-card{
      max-width: 580px;
      width: 100%;
      background: #ffffff;

      border-radius: 4px;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      .card-header{
        padding: 31px;
        h2{
          font-size: 1.8rem;
          color: #768895;
          font-weight: 400;
          font-family: 'PostGrotesk-Medium';
          img{
            padding-right: 10px;
            transform: translateY(3px);
          }
        }
        p{
          font-size: 1.4rem;
          font-family: 'PostGrotesk-Book';
          color: #808080;
        }
      }
      .card-body{
        padding: 50px 93px;
        background-color: #FBFCFC;
        text-align: center;
        border-top: @border;
        border-bottom: @border;
        p{
          color: #3C454B;
          font-size: 1.6rem;
          .country-code, .phone-number{
            color: #999999;
            border: solid 1px #DEDDDD;
          }
          .country-code{
            background-color: #F0EDED;
            padding: 4px 6px 4px 13px;
            border-radius: 2px 0 0 2px;
            margin-left: 1px;
          }
          .phone-number{
            background-color: #F4F4F4;
            padding: 4px 13px;
            border-radius: 0 2px 2px 0;
          }
        }
        .code-all{
          padding: 0;
          margin: 28px auto 17px auto;
          :first-child{
            margin-left:0 !important;
          }
          :last-child{
            margin-right: 0 !important;
          }
          .code-item{
            border-radius: 4px;
            border-color: #E0E0E0;
            width: 50px;
            height: 50px;
            line-height: 50px;
            margin: 0 7px;
            &.code-active{
              border-color: #64B5F6 !important;
            }
          }
        }
        .receive-code{
          display:inline-flex;
          width: 100%;
          a{
            font-family: 'PostGrotesk-Book';
            font-size: 1.2rem;
            line-height: 27px;
            color: #768895;
          }
          &>div{
            width: 50%;
            img{
              transform: translateY(3px);
              padding-right: 10px;
            }
            &.new-code{
              text-align: left;
            }
            &.code-via-call{
              text-align: right;
            }
          }
        }
      }
      .card-footer{
        padding: 31px;
        &>div{
          width: 50%;
        }
        .footer-left {
          text-align: left;
          float: left;
        }
        .footer-right{
          text-align: right;
          float: right;
        }
        .clear-fix{
          clear: both;
        }
        .button{
          padding: 8px 15px;
          border: @border;
          border-radius: 4px;
          margin-right: 20px;
          font-size: 1.4rem;
          cursor: pointer;
        }
        .button-blue{
          background-color: @brand-blue;
          color: #ffffff;
          font-family: PostGrotesk-Medium;
          &.locked{
            background-color: rgba(110, 192, 230, 0.5);
            cursor: not-allowed;
          }
        }
        .button-white{
          color: #808080;
          background-color: #ffffff;
          font-family: PostGrotesk-Book;
        }
        .link-blue{
          color: @brand-blue;
          font-family: PostGrotesk-Medium;
        }
      }
    }
  }
</style>
