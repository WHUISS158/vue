<template>
  <ul v-if="results.length > 0" class="ul-results">
      <li v-for="result in results" class="li-result" @click="listClick" :keys="result.type">
          <img :src="result.zoom" alt="" class="img-fix">
          <p class="content">{{result.type}}</p>
      </li>
  </ul>
  <ul v-else>
      <!--<li>No Results</li>-->
  </ul>
</template>

<script>
export default {
    props: ['results'],
    methods: {
        listClick(event) {
            this.$store.commit('moduleClick', event.currentTarget.attributes.keys.value)
        }
    }
}
</script>

<style scoped>
.ul-results{
    position: relative;
    z-index: 10;
    background: #fff;
    max-height:640px;
    border-radius: 3px 4px 4px 3px;
    overflow-y: auto; 
}
.li-result{
    height: 80px;
    cursor: pointer
}
.img-fix{
    display: block;
    margin: 0 auto;
    height: 55px;
    max-width: 95%;
    padding-top: 3px;
}
.content{
    margin-top: 3px;
    text-align: center;
    vertical-align: middle;
}
.li-result:hover{
    background: #efefef;
}
</style>
