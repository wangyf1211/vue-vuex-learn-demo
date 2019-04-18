<template>
  <div class="goods">
    <div class="left">
      <ul>
        <li v-for="(good,index) in goods" :key="index">
          <span>{{good.name}}</span>
        </li>
      </ul>
    </div>

    <div class="right">
      <ul>
        <li v-for="(good,index) in goods" :key="index">
          <span>{{good.name}}</span>
          <good-item v-for="(food,id) in good.foods" :key="id" :food="food"></good-item>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import GoodItem from "./GoodItem";
export default {
  name: "Goods",
  data() {
    return {};
  },
  components: {
    "good-item": GoodItem
  },
  created() {
    this.$store.dispatch("getGoods");
  },
  computed: {
    ...mapGetters(["goods"])
  }
};
</script>
<style lang="less" scoped>
@bg-color: #eeeeeea8;
.goods {
  display: flex;
  .left {
    width: 20%;
    font-size: 14px;
    background: @bg-color;
    overflow:hidden;

    li {
      text-overflow: ellipsis;
      width: 75px;
      overflow: hidden;
      display: block;
      height: 30px;
      white-space: nowrap;
      &.active {
        background: #fff;
      }

      span {
        text-align: center;
        line-height: 30px;
        padding-left: 10px;
      }
    }
  }
  .right {
    width: 80%;
    li {
      span {
        display: inline-block;
        width: 100%;
        padding: 5px;
        background: @bg-color;
        margin-bottom: 5px;
        color: #ffa500db;
        font-size: 14px;
      }
      font-size: 13px;
    }
  }
}
</style>
