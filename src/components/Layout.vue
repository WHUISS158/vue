<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="3" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="productSelected">
                    <!--<div class="layout-logo-left"></div>-->
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            模块开发规范
                        </template>
                        <Menu-item name="1-1">开发规范</Menu-item>
                        <Menu-item name="1-2">使用方式</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            在线模块库
                        </template>
                        <Menu-item name="yanxuan">网易严选</Menu-item>
                        <Menu-item name="master">邮箱大师</Menu-item>
                        <Menu-item name="yiyuan">一元夺宝</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header">
                    <Menu mode="horizontal" active-name="1" @on-select="horSelected" theme="dark">
                        <div class="layout-assistant">
                            <Menu-item v-for="tab in tabs" :name="tab">{{tab}}</Menu-item>
                            <!--<Menu-item name="banner">Banner</Menu-item>
                            <Menu-item name="mail">直邮</Menu-item>
                            <Menu-item name="rule">活动规则</Menu-item>
                            <Menu-item name="GoodsModules">goods商品位</Menu-item>
                            <Menu-item name="NoneGoodsModules">非goods商品位</Menu-item>
                            <Menu-item name="common">公共</Menu-item>-->
                        </div>
                    </Menu>
                </div>
                <div class="layout-content">
                    <div v-if="isList">
                        <ModuleList></ModuleList>
                    </div>
                    <div v-else>
                        you can see me now
                    </div>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import ModuleList from './ModuleList'
export default {
    data: function () {
        return {
            isList: true
        }
    },
    computed: {
        tabs() {
            return this.$store.state.tabs
        }
    },
    methods: {
        productSelected: function (name) {
            this.$store.commit('productChange', name)
        },
        horSelected(name){
            this.$store.commit('tabChange', name)
        }
    },
    components: {
        ModuleList
    }
}
</script> 
