<template>
  <div id='details-panel'>
    <div class="details-table">
      <div class="table-head">
        <p>Send Details</p>
      </div>
      <div class="you-send">
        <div class="left">You Send</div>
        <div class="right">€2,000.00</div>
      </div>
      <div class="receive-details">
        <div class="left">Receiving Details</div>
        <div class="right info">As of right now <img src="../assets/images/info.png"></div>
      </div>
      <div class="details-content">
        <div class="left">Rate</div>
        <div class="right">0.86022</div>
        <div class="left">Fee</div>
        <div class="right">£2.50</div>
        <div class="left">Delivery Date</div>
        <div class="right">25th November</div>
        <div class="left">Recipient Gets</div>
        <div class="right dark">£1717.94</div>
      </div>
      <div class="table-foot">
        You save $66.19 compared to your bank!
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailsPanel"
    }
</script>

<style lang="less" scoped>
  .details-table{
    margin: 53px auto auto 56px;
    max-width: 310px;
    width: 100%;
    border: solid 1px #E0E0E0;
    border-radius: 3px;
    border-collapse: collapse;
    display: flex;
    flex-flow: row wrap;
    font-size: 1.4rem;
    line-height: 24px;
    &>div{
      padding: 20px;
      border-bottom: solid 1px #E0E0E0;
      width: 100%;
      max-width: 100%;
      &>div{
        width:50%;
      }
    }
    .table-head{
      color: #616161;
      border-bottom: solid 1px #E0E0E0;
      width: 100%;
    }
    .right{
      text-align: right;
    }
    .details-content, .you-send{
        background-color: #ffffff;
        color: #9E9E9E;
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
      }
    }
  .dark{
    color: #616161;
  }
</style>
