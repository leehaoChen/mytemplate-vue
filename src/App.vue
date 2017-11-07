<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: function(){
    return {
      name: '123123'
    }
  }
}
</script>

<style lang='scss' scopde>
@import './assets/style/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dfColor;
  margin-top: 60px;
}
</style>
