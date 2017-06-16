<template>
    <div class="wrap">
        <div class="m-wrap" @click="showModal">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170506/14940772741780208.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170506/14940380951830024.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170511/14944914200943695.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170504/14938764681870582.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170506/14940772741780208.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170506/14940772741780208.png" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
        <div class="m-wrap">
            <div class="img-wrap">
                <img src="https://mimg.127.net/hz/uploader/20170506/14940425159150046.jpg" alt="" class="img-fixed">
            </div>
            <div class="text-wrap">
                <span class="text-type left">banner模块</span>
                <span class="text-split left"> | </span>
                <span class="text-name left">YX_N_M_0501</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showModal() {
            this.$store.commit('showModal')
        }
    }
}
</script>

<style scoped>
.wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.m-wrap {
    height: 200px;
    width: 200px;
    border: 1px solid #efefef;
    cursor: pointer;
    box-shadow: 0.5px 0.5px 0.5px #888;
    margin: 10px 15px;
}

.m-wrap:hover {
    box-shadow: 5px 5px 5px #888;
}

.img-wrap {
    height: 80%;
    overflow: hidden;
}

.img-fixed {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    transition: transform ease 0.8s;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.img-fixed:hover {
    transform: scale(1.25, 1.25) translateY(-40%);
    transform-origin: 50% 50%
}

.text-wrap {
    height: 20%;
    font-size: 12px;
    color: #838383;
    text-align: center;
    text-shadow: 0.5px 0.5px 0.5px #ededed;
}

.left {
    display: block;
    float: left;
    height: 40px;
    line-height: 40px;
}

.text-type {
    width: 40%;
}

.text-name {
    width: 55%;
}

.text-split {
    width: 5%;
}
</style>
