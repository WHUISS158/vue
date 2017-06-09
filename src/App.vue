<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="less">
@import './index.less';

html{
  width: 80%;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // width: 300px;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 6px;  
    /*background-color: #F5F5F5;*/
    border-radius: 5px;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 2px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 3px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: blue;  
}  
</style>
