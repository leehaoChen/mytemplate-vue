<template>
  <div class="wrap clearfix ">
    <router-link :to="item.value" @click.native="nowPath = $router.currentRoute.fullPath" :key="item.name" v-for="item, index in linklist">
      <div class="item color-df":class="{active:item.value==nowPath}"><VerticMid>{{item.name}}</VerticMid><div class="underline"></div></div>
    </router-link>
  </div>
</template>
<script>
import VerticMid from './common/VerticMid'
export default {
  name: 'nav',
  components: {
    VerticMid
  },
  data: function () {
    return {
      linklist: [{name: '态势', value: '/taiShi'}, {name: '分析', value: '/fenXi'}],
      nowPath: ''
    }
  },
  created: function () {
    this.nowPath = this.$router.currentRoute.fullPath
  }
}
</script>
<style scoped>
.item{
  height:100%;
  float: left;
  margin-left: 20px;
  position: relative;
  padding-right:20px;
  padding-left:20px;
  text-align: center;
  font-size: 1rem;
}
.item.active .underline{
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  height: 2px;
  background-color: #fff;
}
.wrap{
  background-color: #45289f;
}
a{
  height: 100%;
}

</style>