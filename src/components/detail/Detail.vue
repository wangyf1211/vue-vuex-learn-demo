<template>
  <div>
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
    >
      <div class="detail" v-show="detailShow">
        <a href="#" @click="hideDetail">&gt;&gt;</a>
        <p>简介：{{seller.bulletin}}</p>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "detail",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["seller", "detailShow"])
  },
  methods: {
    hideDetail() {
      this.$store.dispatch("hideDetail");
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  background: #009e9e;
  z-index: 999;
  color: #fff;
  font-size: 14px;
  p {
    width: 80%;
    margin-top: 14px;
    margin-left: auto;
    margin-right: 25px;
  }
  a {
    display:block;
    position: fixed;
    top: 50px;
    color: #fff;
    font-size: 15px;
    background: #ffffff5c;
    border-radius: 5px;
    font-weight: 700;
    border-width: 0;
    width:30px;
    text-align: center;
    height: 25px;
    line-height:25px;
  }
}
</style>
