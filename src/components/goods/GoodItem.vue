<template>
  <div class="good-item">
    <img :src="food.image" alt="食物图片">
    <span>{{food.name}}</span>
  </div>
</template>
<script>
export default {
  name: "good-item",
  props: ["food"]
};
</script>
<style lang="less" scoped>
.good-item {
    margin-bottom: 20px;
  display: flex;
  img {
    width: 80px;
    height: 80px;
    border-radius:1px;
  }
  span {
    display: block;
    margin: 10px 5px;
    &:first-of-type {
      font-size: 14px;
    }
  }
}
</style>
