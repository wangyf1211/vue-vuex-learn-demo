<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'
import Triangle from '@/components/Triangle'
export default {
  name: 'App',
  components:{
    'v-header':Header,
    'v-tab':Tab
  }
}
</script>

<style lang="less" scope>
</style>
