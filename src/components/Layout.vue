<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: absolute;
    width: 100%;
    min-height: 500px;
    max-height: 820px;
    top: 60px;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: 0px;
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
    min-height: 500px;
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

.header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    background: #1d1d1d;
}
.nav{
    float: left;
    font-size: 0;
    vertical-align: middle;
    margin-left: 39px;
    cursor: default;
}
.nav-logo{
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 16px;
}
.nav-content{
    font-size: 16px;
    line-height: 20px;
    vertical-align: middle;
    display: inline-block;
    color: #c8171d;
}
</style>
<template>
    <div>
        <div class="header">
            <div class="nav">
                <img src="http://mimg.127.net/hz/uploader/20170527/14958696862000805.png" alt="" class="nav-logo">
                <span class="nav-content">
                    模块文档平台
                </span>
            </div>
        </div>
        <div class="layout">
            <Row type="flex">
                <i-col span="3" class="layout-menu-left">
                    <div class="layout-logo-left">
                        <Search></Search>
                    </div>
                    <Menu active-name="static-doc-formula" width="auto" :open-names="['doc']" @on-select="productSelected">
                        <!--<div class="layout-logo-left"></div>-->
                        <Submenu name="doc">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                模块开发规范
                            </template>
                            <Menu-item name="static-doc-formula">开发规范</Menu-item>
                            <Menu-item name="static-doc-use">使用方式</Menu-item>
                        </Submenu>
                        <Submenu name="moduleLibs">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                在线模块库
                            </template>
                            <Menu-item v-for="product in products" :name="product.english">{{product.chinese}}</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="21">
                    <div class="layout-header" v-if="showHorTabs">
                        <Menu mode="horizontal" :active-name="moduleTypes[0].english" @on-select="horSelected">
                            <div class="layout-assistant">
                                <Menu-item v-for="moduleType in moduleTypes" :name="moduleType.english">{{moduleType.chinese}}</Menu-item>
                            </div>
                        </Menu>
                    </div>
                    <div class="layout-content" @click="bodyClick">
                        <div v-if="isList">
                            <ModuleList></ModuleList>
                        </div>
                        <div v-else>
                            <div v-if="docType == 'use'">
                                <DocUse></DocUse>
                            </div>
                            <div v-else>
                                <DocFormula></DocFormula>
                            </div>
                        </div>
                    </div>
                </i-col>
            </Row>
            <ModuleDetail></ModuleDetail>
        </div>
    </div>
</template>
<script>
import ModuleDetail from './ModuleDetail'
import ModuleList from './ModuleList'
import Search from './Search'
import DocFormula from './static/formula'
import DocUse from './static/use'
export default {
    data: function () {
        return {
            isList: false,
            docType: 'formula',
            showHorTabs: false
        }
    },
    computed: {
        moduleTypes() {
            // debugger
            let moduleTypes = []
            let that = this
            this.$store.state.currentModuleTypes.forEach((moduleType) => {
                moduleTypes.push({ 'chinese': that.$store.state.config.moduleTypes[moduleType], 'english': moduleType })
            })
            return moduleTypes
        },
        products() {
            let products = []
            let that = this
            this.$store.state.products.forEach((product) => {
                products.push({ 'chinese': that.$store.state.config.products[product], 'english': product })
            })
            return products
        },
        showHorTabs() {
            return this.$store.state.showHorTabs
        }
    },
    methods: {
        productSelected: function (name) {
            if (/static/.test(name)) {
                this.isList = false
                if (/use/.test(name)) {
                    this.docType = 'use'
                } else {
                    this.docType = 'formula'
                }
                this.showHorTabs = false
            } else {
                this.isList = true
                this.$store.commit('productChange', name)
                this.showHorTabs = true
            }
        },
        horSelected(name) {
            this.$store.commit('moduleTypeChange', name)
            this.$store.commit('pageChange', 1)
        },
        bodyClick() {
            this.$store.commit('hideSearchResult')
        }
    },
    mounted() {
        // debugger
    },
    components: {
        ModuleDetail, ModuleList, Search, DocFormula, DocUse
    }
}
</script> 
