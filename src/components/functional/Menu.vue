<template>
    <div class="m-menu">
        <div class="m-hormenu">
            <div class="u-hormenu "@mouseover="showSubMenu" @mouseout="hideSubMenu">
                <div class="u-hormenu-wrap">
                    <span class="u-hormenu-text">严选模块</span>
                    <i class="u-split"></i>
                    <div style="clear:both"></div>
                </div>
                <div class="m-submenu-wrap" :class="{ hidden: !subMenuShowed}">
                    <div class="m-submenu">
                        <ul class="ul-fixed">
                            <li class="m-submenu-item">
                                公共模块
                            </li>
                            <li class="m-submenu-item">
                                公共模块
                            </li>
                            <li class="m-submenu-item">
                                公共模块
                            </li>
                            <li class="m-submenu-item">
                                公共模块
                            </li>
                            <li class="m-submenu-item">
                                公共模块
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subMenuShowed: false
        } 
    },
    props: ['Menus'],
    computed: {
        // showSubMenu() {
            
        // }
    },
    methods: {
        showSubMenu() {
            this.subMenuShowed = true
        },
        hideSubMenu() {
            this.subMenuShowed = false
        }
    }
}
</script>

<style scoped>
.ul-fixed {
    padding: 0;
}
.hidden {
    display: none;
}

.m-menu {}

.m-hormenu {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    vertical-align: middle;
}

.m-submenu-wrap {
    border: 1px solid #ededed;
    border-top: 0;
    background: #fff;
    padding-top: 10px;
}

.m-submenu {
    
}

.m-submenu-item {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #69696d;
    list-style-type: none;
}


.u-hormenu {
    float: left;
    width: 100px;
    height: 50px;
    font-size: 0px;
    color: #69696d;
}
.u-hormenu-wrap {
    height: 100%;
}






/*.u-hormenu::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}*/

.u-hormenu:hover {
    color: #1769ff;
}

.u-hormenu-text {
    position: relative;
    top: 50%;
    margin-top: -15px;
    width: 96px;
    height: 30px;
    line-height: 30px;
    display: block;
    float: left;
    font-size: 15px;
    cursor: pointer;
}

.u-hormenu-text::after {
    content: '\f107';
    position: absolute;
}

.u-split {
    display: block;
    float: left;
    width: 2px;
    height: 20px;
    line-height: 20px;
    background: #d3d3d3;
    position: relative;
    top: 50%;
    margin-top: -10px;
}
</style>
