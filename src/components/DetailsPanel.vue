<template>
  <div id='details-panel'>
    <table class="details-table">
      <tr class="table-head">
        <td>Send Details</td>
      </tr>
      <tr class="you-send">
        <td>You Send</td>
        <td>€2,000.00</td>
      </tr>
      <tr class="table-head">
        <td>Receiving Details</td>
        <td class="info">As of right now</td>
      </tr>
      <tr class="table-content">
        <td>Rate</td>
        <td>0.86022</td>
      </tr>
      <tr class="table-content">
        <td>Fee</td>
        <td>£2.50</td>
      </tr>
      <tr class="table-content">
        <td>Delivery Date</td>
        <td>25th November</td>
      </tr>
      <tr class="table-content">
        <td>Recipient Gets</td>
        <td>£1717.94</td>
      </tr>
      <tr class="table-foot">
        <td>You save $66.19 compared to your bank!</td>
      </tr>
    </table>
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
    tr{
      td{
        padding: 20px;
        font-size: 1.4rem;
        line-height: 24px;
        border-style: none;
        padding: 20px;
        &.info{
          color: #64B5F6;
          font-size: 1.2rem;
        }
      }
      &.table-content, &.you-send{
        background-color: #ffffff;
        td{
          color: #9E9E9E;
        }
      }
      &.table-content td{
        padding: 0 20px;
      }
      &.table-content:first-child td:first-child{
        padding-top: 20px;
      }
      &.table-head{
        color: #616161;
        border: solid 1px #E0E0E0;
      }
      &.table-foot{
        text-align: center;
        border: solid 1px #E0E0E0;
        td{
          color: #FFC766;
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
