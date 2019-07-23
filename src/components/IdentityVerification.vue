<template>
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
      </div>
      <div class="card-footer">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: "IdentityVerification",
        data(){
          return {
            phoneNumber: {
              countryCode: '+353',
              number: '872251177',
            },
            codeStyle:{
              color:'#768895',
            },
            verificationCode:null,
            codeEntered: false
          }
        },
        methods:{
          codeOutput(e){
            this.verificationCode = e.data
            if(e.isfinished){
              this.codeEntered = true
            }
          }
        }
    }
</script>

<style lang="less">
  #identity-verification{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.75);
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
        padding: 50px;
        background-color: #FBFCFC;
        text-align: center;
        border-top: solid 1px #E0E0E0;
        border-bottom: solid 1px #E0E0E0;
        p{
          color: #3C454B;
          font-size: 1.6rem;
        }
        .code-all{
          padding: 0;
          margin-top: 28px;
          .code-item{
            border-radius: 4px;
            border-color: #E0E0E0;
            width: 50px;
            height: 50px;
            line-height: 50px;
            &.code-active{
              border-color: #64B5F6 !important;
            }
          }
        }

      }
    }
  }
</style>
