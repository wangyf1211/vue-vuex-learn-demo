<template>
  <div class="header">
    <div class="left">
      <h3>{{seller.name}}</h3>
      <span>{{seller.description}}</span>
      <span>预计配送时间 {{seller.deliveryTime}} 分钟</span>
      <span>配送费约 {{seller.deliveryPrice}} 元</span>
    </div>
    <!-- {{seller.score}}
    {{seller.serviceScore}}
    {{seller.foodScore}}
    {{seller.rankRate}}
    {{seller.deliveryPrice}}
    {{seller.ratingCount}}
    {{seller.sellCount}}-->
    <img :src="seller.avatar" alt="商家图片" @click="showDetail">

    <detail></detail>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Detail from "@/components/detail/Detail";
export default {
  name: "Header",
  components: {
    detail: Detail
  },
  data() {
    return {};
  },
  created() {
    this.getSeller();
  },
  computed: {
    ...mapGetters(["seller"])
  },
  methods: {
    ...mapActions(["getSeller", "showDetail"])
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 100px;
  background: #249e9e;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  img {
    width: 80px;
    height: 80px;
    position: relative;
    right: -10%;
  }
  .left {
    width:60%;
    display: flex;
    flex-wrap: wrap;
    h3{
      margin:5px 3px;
    }
    span {
      display: block;
      font-size: 10px;
      margin: 5px 3px;
    }
  }
}
</style>
