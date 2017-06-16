<template>
    <div class="m-body">
        <Modal v-if="showModal"></Modal>
        <div class="layout" :class="{ blur: showModal}">
            <div class="l-hd">
                <Header></Header>
            </div>
            <div class="l-nav">
                <Navigator></Navigator>
            </div>
            <div class="l-content">
                <Content></Content>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Navigator from './Navigator'
import Content from './Content'
import Modal from './../functional/Modal'
export default {
    computed: {
        showModal() {
            return this.$store.state.showModal
        }
    },
    components: {
        Header, Navigator, Content, Modal
    }
}
</script>

<style scoped>
.m-body {
    height: 100%;
}

.layout {
    height: 100%;
}
.blur {
    filter: blur(2px)
}

.l-hd {
    position: fixed;
    background: #1d1d1d;
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    z-index: 10;
}

.l-nav {
    position: fixed;
    top: 50px;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
    z-index: 10;
}

.l-content {
    position: relative;
    top: 101px;
    height: 100%;
    width: 100%;
}
</style>
