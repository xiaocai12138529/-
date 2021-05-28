<template>
  <div>
    <MyHeader
      :backgroundColor="'red'"
      :color="'black'"
      title="购物车案例"
    ></MyHeader>
    <div id="app">
      <MyGoods v-for="item in list" :key="item.id" :goodItem="item" />
    </div>
    <MyFooter :goodItem="list" />
  </div>
</template>

<script>
import MyGoods from './views/MyGoods'
import MyHeader from './views/MyHeader'
import MyFooter from './views/MyFooter'
export default {
  // 自定义组价
  components: {
    MyGoods,
    MyHeader,
    MyFooter
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getCartsList()
  },
  methods: {
    // 获取购物车商品列表数据
    async getCartsList () {
      const res = await this.axios({ url: '/api/cart' })
      console.log(res)
      const { data, status } = res
      console.log(data)
      if (status == 200) {
        this.list = data.list
      }
    }
  }
}
</script>

<style>
#app {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
