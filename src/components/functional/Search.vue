<template> 
    <input type="text" class="u-input" @input="inputChange">
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
