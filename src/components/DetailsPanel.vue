<template>
  <div id='details-panel'>
    <div class="details-table">
      <div class="table-head">
        <p>Send Details</p>
      </div>
      <div class="you-send">
        <div class="left">You Send</div>
        <div class="right dark">€{{details.send}}</div>
      </div>
      <div class="receive-details">
        <div class="left">Receiving Details</div>
        <div class="right info">As of right now <img src="../assets/images/info.png"></div>
      </div>
      <div class="details-content">
        <div class="left">Rate</div>
        <div class="right">{{details.rate}}</div>
        <div class="left">Fee</div>
        <div class="right">£{{fee}}</div>
        <div class="left">Delivery Date</div>
        <div class="right">{{details.delivery}}</div>
        <div class="left">Recipient Gets</div>
        <div class="right dark">£{{details.receive}}</div>
      </div>
      <div class="table-foot">
        You save £{{details.saving}} compared to your bank!
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailsPanel",
      props:[
        'details'
      ],
      computed:{
          fee(){
            // display the final second decimal on the fee
            return this.details.fee.toFixed(2)
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../assets/less/variables.less";
  .details-table{
    margin: 53px auto auto 56px;
    max-width: 310px;
    width: 100%;
    border: @border;
    border-radius: 3px;
    border-collapse: collapse;
    display: flex;
    flex-flow: row wrap;
    font-size: 1.4rem;
    line-height: 24px;
    &>div{
      padding: 20px;
      border-bottom: @border;
      width: 100%;
      max-width: 100%;
      &>div{
        width:50%;
      }
    }
    .table-head{
      color: #616161;
      border-bottom: @border;
      width: 100%;
      background-color: @background-grey-secondary;
    }
    .right{
      text-align: right;
    }
    .details-content, .you-send{
        background-color: #ffffff;
        color: @text-light-grey;
      }
    .receive-details{
      background-color: @background-grey-secondary;
    }
    .you-send, .receive-details{
      display: inline-flex;
    }
    .details-content{
      display: flex;
      flex-flow: row wrap;
    }
    .info{
      color: #64B5F6;
      font-size: 1.2rem;
      img{
        transform: translateY(15%);
        padding-left: 2px;
      }
    }
    .table-foot{
      border-style: none;
      text-align: center;
      color: #FFC766;
      font-size: 1.2rem;
      background-color: #ffffff;
      }
    }
  .dark{
    color: #616161;
  }
</style>
