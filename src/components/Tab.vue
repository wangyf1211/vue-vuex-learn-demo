<template>
  <!-- <div> -->
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "tab",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.tab {
  background: #229e9e;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 45px;

  .tab-item {
    flex: 1;
    background: #229e9e;
    text-align: center;
    & > a {
      font-size: 14px;
      color: #fff;
      height: 45px;
      display: block;
      line-height: 45px;

      &:active,
      &:hover {
        color: #229e9e;
        background: #fff;
        border-radius: 3px 3px 0 0;
      }
    }
  }
}
</style>

