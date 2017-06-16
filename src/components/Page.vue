<template>
    <div class="center">
        <div class="left content">
            共{{total}}条
        </div>
        <div class="left btn pre">上一条</div>
        <div class="left btn next">下一条</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.center{
    margin: 0 auto;
}
.left {
    float: left;
    height: 32px;
    line-height: 30px;
}
.content {
    margin-right: 10px;
}
.btn{
    width: 90px;
    height: 32px;
    background: #ddd;
    border: 1px solid #f7f7f7;
    line-height: 30px;
    cursor: pointer;
}
.pre{
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}
.next{
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}
</style>
