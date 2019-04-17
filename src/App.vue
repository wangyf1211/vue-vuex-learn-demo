<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-tab></v-tab>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'
export default {
  name: 'App',
  components:{
    'v-header':Header,
    'v-tab':Tab
  }
}
</script>

<style lang="less" scope>
v-footer {
position: absolute;
bottom:0px;
}
</style>
