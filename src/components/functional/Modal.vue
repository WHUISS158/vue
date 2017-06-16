<template>
    <div class="m-mask">
        <div class="m-modal">
            <div class="header">
                <span class="title">YX_N_M_0501</span>
                <span class="close" @click="closeModal"></span>
            </div>
            <div class="content">
                <img src="http://mimg.127.net/hz/uploader/20170301/14883388916860556.jpg" alt="" class="img-fixed">
                <p>模块名：YX_N_M_0501</p>
                <p>模块功能：严选企业购头部</p>
                <p>模块介绍：严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部严选企业购头部</p>
                <p>适用PC：是</p>
                <p>适用移动端：否</p>
                <p>所属产品：网易严选</p>
                <p>所属分类：公共模块</p>
                <p>模块配置项："筛选模块(适配pc端)", "请先设置需要的制造商数量makerNumber,再填写goodsId", "ps：请保证制造商设置数量和制造商的图片地址数量一致,图片地址为空默认不显示", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "itemsOnPage: 默认45个,表示一页展现的商品数量", "topic:该字段用于人气排序,请在pub中创建一个投票将设置的topic的值写入这个字段", "qrcodeLink:二维码的链接", "qrcodeBg: 二维码的背景图", "maxPrice: 设置筛选的最大价格(请设置>=这一批商品的最贵的那一个商品的价格)", "makerNumber: 设置显示制造商的数量", "hotMakerImg: 每个制造商的图片地址"</p>
                <p>使用方式：</p>
                <blockquote>
                    <pre>
                        <code>
                         &ltNModule&gt
                             &ltName&gtYX_N_M_0505&lt/Name&gt
                             &ltData&gt&lt/Data&gt
                         &lt/NModule&gt
                        </code>
                    </pre>
                </blockquote>
                <p>配置数据：</p>
                <blockquote>
                    <pre>
                        <code>
                            {
                                name: 'aaa'
                            }
                        </code>
                    </pre>
                </blockquote>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$store.commit('closeModal')
        }
    }
}
</script>

<style scoped>
.m-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
}

.m-modal {
    width: 600px;
    height: 700px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    margin-top: -350px;
    border: 1px solid #efefef;
    box-shadow: 0.5px 0.5px 0.5px #888;
    background: #fff;
    text-align: left;
}

.header {
    height: 40px;
    border-bottom: 1px solid #efefef;
}

.content {
    height: 650px;
    overflow-y: auto;
    padding: 10px 15px;
    box-sizing: border-box;
}

.title {
    display: block;
    float: left;
    font-size: 15px;
    padding: 5px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    letter-spacing: 1px;
}

.img-fixed {
    margin: 10px auto;
    display: block;
    max-width: 100%;
    box-shadow: 0.5px 0.5px 0.5px #888;
}

.close {
    display: block;
    width: 30px;
    height: 30px;
    float: right;
    padding: 5px;
    position: relative;
    box-sizing: border-box;
    transform: rotate(45deg);
    cursor: pointer;
}
.close::before {
    content: '';
    width: 15%;
    height: 15%;
    position: absolute;
    left: 35%;
    top: 35%;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
}
.close::after {
    content: '';
    width: 15%;
    height: 15%;
    position: absolute;
    left: 50%;
    top: 50%;
    border-left: 1px solid black;
    border-top: 1px solid black;
}
</style>
