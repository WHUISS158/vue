<template>
    <header>
        <div>
            <div class="h-logo">
                <img src="http://mimg.127.net/hz/uploader/20170527/14958696862000805.png" alt="" class="h-logo-img">
                <span class="h-logo-title">邮件运营平台-模块文档</span>
            </div>
            <div class="m-search">
                <Search></Search>
            </div>
        </div>
    </header>
</template>

<script>
import Search from './../functional/Search'
export default {
    components: {
        Search
    }
}
</script>

<style scoped>
.h-logo {
    float: left;
    font-size: 0px;
    margin-left: 40px;
}

.h-logo-img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 12px;
}

.h-logo-title {
    font-size: 16px;
    line-height: 18px;
    vertical-align: middle;
    display: inline-block;
    color: #c8171d;
}

.m-search {
    float: right;
    margin-right: 40px;
}
</style>
