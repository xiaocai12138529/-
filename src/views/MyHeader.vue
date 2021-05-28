<template>
  <div class="my-header"
    :style="{color:color,background : backgroundColor}"
  >{{title}}</div>
</template>

<script>
export default {
// 基本写法 =>只能定义接收员的变量名
// props:['']
// 完整写法
props :{
  // 显示title
  title:{
    type:String,
    default:'报错显示'
  },
  color:{
    type:String,
    default:'red'
  },
  backgroundColor:{
    type:String,
    default:'orange'
  }
}
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>