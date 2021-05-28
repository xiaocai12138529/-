<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="goodItem.id"
          v-model="goodItem.goods_state"
        />
        <label class="custom-control-label" :for="goodItem.id">
          <img :src="goodItem.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ goodItem.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ goodItem.goods_price }}</span>
        <!-- 数量组件 -->
        <span><MyCount :goodItem='goodItem'/></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      // 如果是复杂类型,默认值就通过函数返回
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
    .custom-control-input {
      margin: 0 10px 0 0px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>