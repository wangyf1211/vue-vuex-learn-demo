<template>
  <div class="header">
    {{seller.name}}
    <img :src="seller.avatar" alt="商家图片">
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
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
    ...mapActions(["getSeller"])
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
  }
}
</style>
