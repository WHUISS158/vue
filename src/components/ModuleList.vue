<style scoped>
.list{
    display: block;
    margin: 10px;
    height: 300px;
}
.row-style{
    margin-bottom: 10px
}
.img{
    display: block;
    width: 100%;
}
</style>
<template>
  <Row :gutter="16">
      <Col span="6" v-for="module in modules" :key="module"  class="row-style">
        <a class="list">
            <img :src="module.imgUrl" :alt="module.title+'缩略图'" class="img">
            <span>{{module.title}}</span>
        </a>
      </Col>
  </Row>
</template>

<script>
    export default {
        name: 'modulelist',
        props: [],
        data(){
            return {
                modules: [{
                    imgUrl: 'https://mimg.127.net/hz/uploader/20170518/14951073168419205.png',
                    title: 'byxhd'
                }]
            }
        }
    }
</script>


