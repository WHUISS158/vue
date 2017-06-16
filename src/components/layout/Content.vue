<template>
  <div class="m-content-wrap">
      <ModuleCube></ModuleCube>
  </div>
</template>

<script>
import ModuleCube from './../functional/ModuleCube'
export default {
    components: {
        ModuleCube
    }
}
</script>

<style>
.m-content-wrap {
    width: 80%;
    margin: 0px auto;
    padding: 10px;
}
</style>
