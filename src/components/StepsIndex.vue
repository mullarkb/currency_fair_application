<template>
  <div id="steps-index">
    <div class="steps">
      <div class="step" :class="{selected: step1}">
        <div class="content">
          <p class="small">Step 1</p>
          <p>Transaction info</p>
        </div>
      </div>
      <div class="step" :class="{selected: step2}">
        <div class="content">
          <p class="small" >Step 2</p>
          <p>Recipient info</p>
        </div>
      </div>
      <div class="step" :class="{selected: step3}">
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
  name: 'StepsIndex',
  props: ['step'],
  computed: {
    /* change which step is highlighted, depending on the step value passed as a prop
           */
    step1 () {
      if (this.step == 1) {
        return true
      } else return false
    },
    step2 () {
      if (this.step == 2) {
        return true
      } else return false
    },
    step3 () {
      if (this.step == 3) {
        return true
      } else return false
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/variables.less';
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
      border-color: @brand-blue;
      p {
        color: @brand-blue;
      }
    }
  }
</style>
