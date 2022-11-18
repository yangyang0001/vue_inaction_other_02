
<template>
  <div class="root">
    <h1>App根组件</h1>

    <div class="left">
      <Left></Left>
    </div>
    <div class="right">
      <Right></Right>
    </div>

  </div>
</template>

<script>
  // 1、导入组件
  import Left from '@/components/Left.vue'
  import Right from '@/components/Right.vue'

  // 2、注册组件
  export default {
    components: {
      Left,
      Right
    }
  }
</script>

<style lang="less" scoped>
  .root {
    padding: 5px 20px 110px 20px;
    background-color: #efefef;
  }
  .left {
    float: left;
    background-color: aqua;
    width: 50%;
    padding: 5px 0px 20px 0px;
    font-weight: bolder;
  }
  .right {
    float: right;
    background-color: #e0e30e;
    width: 50%;
    padding: 5px 0px 20px 0px;
    font-weight: bolder;
  }
</style>