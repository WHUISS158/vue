<template> 
    <input type="text" class="u-input" @input="inputChange" placeholder="输入关键字进行搜索">
</template>

<script>
export default {
    methods: {
        inputChange(event) {
            let value = event.target.value
            console.log(value)
        }
    }
}
</script>

<style scoped>
.u-input {

    background: #fff;
}
</style>
