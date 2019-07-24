<template>
  <div id="steps-index">
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
  </div>
</template>

<script>
    export default {
        name: "StepsIndex"
    }
</script>

<style lang="less" scoped>
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
        padding: 0 21px 21px 21px;
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
</style>
