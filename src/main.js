// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'
import _ from 'lodash'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(iView)
Vue.use(Vuex)

const modulesInfo = {
    "yanxuan": {
        "modules": {
            "common": {
                "title": "公共模块",
                "modules": [{
                    "img": "https://mimg.127.net/hz/uploader/20170518/14951071559089203.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170518/14951071559089203.png",
                    "value": "byxft",
                    "type": "byxft",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["严选企业购尾部"],
                    "libC": [""],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170518/14951073168419205.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170518/14951073168419205.png",
                    "value": "byxhd",
                    "type": "byxhd",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["严选企业购头部"],
                    "libC": ["http://mimg.127.net/pub/common/css/PSC_YXtoB_PC_reset.css"],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161011/14761714485131565.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161011/14761714485881573.jpg",
                    "value": "yxft",
                    "type": "yxft",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["没有配置项"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161011/14761714486151576.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161011/14761714485361568.jpg",
                    "value": "yxhd",
                    "type": "yxhd",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["没有配置项"],
                    "libC": ["http://mimg.127.net/pub/common/css/PSC_YX_PC_reset.css"],
                    "libJ": []
                }]
            },
            "NoneGoodsModules": {
                "title": "商品位模块（未接入goods系统）",
                "modules": [{
                    "img": "http://mimg.127.net/hz/uploader/20161011/14761714485001563.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161011/14761714485661571.jpg",
                    "value": "yxBackModule",
                    "type": "yxBackModule",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": [],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://yanxuan.nosdn.127.net/14939829526331084.jpg",
                    "zoom": "https://yanxuan.nosdn.127.net/14939829526331084.jpg",
                    "value": "YX_S_M_3901",
                    "type": "YX_S_M_3901",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["非goods模块", "productId：goods系统的接口id字段(请问后台君要~)", "price: 价格"],
                    "libC": [],
                    "libJ": []
                }]
            },
            "GoodsModules": {
                "title": "商品位模块(接入goods系统)",
                "modules": [{
                    "img": "https://mimg.127.net/hz/uploader/20170506/14940772741780208.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170506/14940772741780208.png",
                    "value": "YX_N_M_0118",
                    "type": "YX_N_M_0118",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "bgColor: 背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限4字以内）"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/h/u/PSC_C_M_swiper3.4.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170506/14940380951830024.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170506/14940380951830024.png",
                    "value": "YX_N_M_0406",
                    "type": "YX_N_M_0406",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "注意图片长方形大小为：620x375", "goodsId：goods系统的接口id字段(请问后台君要~)", "bgColor: 背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限6字以内）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170511/14944920175983725.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170511/14944920175983725.png",
                    "value": "YX_N_M_0705",
                    "type": "YX_N_M_0705",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["更多商品推荐栏目", "titleImage:标题图片地址", "mianTitle:主标题", "subTitle:副标题", "goodsId1：第一组商品组Id", "goodsId2：第二组商品组Id", "title1:第一组商品标题", "title2:第二组商品标题"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170505/14939682711950973.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170505/14939682711950973.png",
                    "value": "YX_N_M_0813",
                    "type": "YX_N_M_0813",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["轮播图模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "backgroundColor:模块整体背景颜色", "contentColor:轮播内容背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限6字以内）"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_C_C_slick.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20170228/14882780980380402.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170228/14882780980380402.jpg",
                    "value": "YX_N_M_1137",
                    "type": "YX_N_M_1137",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170504/14938764681870582.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170504/14938764681870582.png",
                    "value": "YX_N_M_1207",
                    "type": "YX_N_M_1207",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配PC端)", "注意图片长方形大小为：537x324", "goodsId：goods系统的接口id字段(请问后台君要~)", "bgColor: 背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限4字以内）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170308/14889390899380187.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170308/14889390899380187.jpg",
                    "value": "YX_N_M_2097",
                    "type": "YX_N_M_2097",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "注意：需要优惠券按钮功能,券后价格的请让后台增加extend字段:", "1、couponPrice 券后自配价格字段 ", "2、btnText  按钮文案", " 3、btnLink 按钮链接", " 4、oldUserFlag 老用户为1,新用户0,没有配置则不显示图片底部的条框", "不配置extend字段按一般正常商品功能显示"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161102/14780522153353952.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161102/14780522153353952.jpg",
                    "value": "YX_N_M_2BE2",
                    "type": "YX_N_M_2BE2",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "backgroundImage:左侧图片地址", "bgColor: 背景颜色", "注意：左上角字段需要后台在接口的extend扩展中添加字段tip_key"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170414/14921575663680865.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170414/14921575663680865.png",
                    "value": "YX_N_M_8178",
                    "type": "YX_N_M_8178",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(H5)", "goodsId：商品组Id", "注意：新增extend字段", "1、couponPrice 券后自配价格字段 ", "2、btnText  按钮文案", " 3、btnLink 按钮链接", " 4、oldUserFlag： 设置为 1 则显示下面的tip"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170306/14887907803850413.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170306/14887907803850413.jpg",
                    "value": "YX_N_M_417A",
                    "type": "YX_N_M_417A",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "titurl: 点击左上角图片跳转的网址链接", "titimg: 左上标题图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161122/14797812303460424.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161122/14797812303460424.jpg",
                    "value": "YX_N_M_46EB",
                    "type": "YX_N_M_46EB",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["goods模块(适配pc和移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "title:标题文字", "tip：标题下面的小字描述(共3个，留空则不显示)"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170315/14895777584090653.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170315/14895777584090653.png",
                    "value": "YX_N_M_53C0",
                    "type": "YX_N_M_53C0",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170308/14889776947890133.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170308/14889776947890133.jpg",
                    "value": "YX_N_M_5589",
                    "type": "YX_N_M_5589",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "注意：需要优惠券按钮功能,券后价格的请让后台增加extend字段:", "1、couponPrice 券后自配价格字段 ", "2、couponLink 优惠券的链接", "不配置extend字段按一般正常商品功能显示"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170110/14840370665660387.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170110/14840370665660387.jpg",
                    "value": "YX_N_M_64E0",
                    "type": "YX_N_M_64E0",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170109/14839540766420019.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170109/14839540766420019.jpg",
                    "value": "YX_N_M_77DE",
                    "type": "YX_N_M_77DE",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "leftImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170506/14940425159150046.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170506/14940425159150046.jpg",
                    "value": "YX_N_M_78D9",
                    "type": "YX_N_M_78D9",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "bgColor: 背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限4字以内）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161102/14780522153453953.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161102/14780522153453953.jpg",
                    "value": "YX_N_M_7A5D",
                    "type": "YX_N_M_7A5D",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "backgroundImage:右侧图片地址", "bgColor: 背景颜色", "注意：左上角字段需要后台在接口的extend扩展中添加字段tip_key"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170310/14891363360010543.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170310/14891363360010543.jpg",
                    "value": "YX_N_M_8178",
                    "type": "YX_N_M_8178",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(H5)", "goodsId：商品组Id", "注意：新增extend字段", "1、couponPrice 券后自配价格字段 ", "2、btnText  按钮文案", " 3、btnLink 按钮链接", " 4、oldUserFlag： 设置为 1 则显示下面的tip"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170315/14895739440640652.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170315/14895739440640652.png",
                    "value": "YX_N_M_8358",
                    "type": "YX_N_M_8358",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161116/14792617349681175.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161116/14792617349681175.jpg",
                    "value": "YX_N_M_881B",
                    "type": "YX_N_M_881B",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "titleImage:标题图片地址", "bgColor：背景颜色", "注意：newItemFlag:true表示新品。左上角字段(明星或热销)需要后台在接口中添加字段flag,flag为1:表示明星产品,flag为2:表示热销"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161205/14809274258960399.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161205/14809274258960399.jpg",
                    "value": "YX_N_M_92C9",
                    "type": "YX_N_M_92C9",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["goods模块(适配pc和移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "title:标题文字", "tip：标题下面的小字描述"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170109/14839435087250039.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170109/14839435087250039.jpg",
                    "value": "YX_N_M_94FE",
                    "type": "YX_N_M_94FE",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "title: 标题文字", "tip：单行描述(共两行)"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161102/14780522153243951.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161102/14780522153243951.jpg",
                    "value": "YX_N_M_9BBD",
                    "type": "YX_N_M_9BBD",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "backgroundImage: 背景大图片地址", "注意：商品左上角字段需要后台在接口的extend扩展中添加字段tip_key"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/hxm/dashi/promote/plugIn/swiper.min.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161102/14780522153133950.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161102/14780522153133950.jpg",
                    "value": "YX_N_M_A1C6",
                    "type": "YX_N_M_A1C6",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "titleImage:标题图片地址", "tips：底部灰色小字", "注意：左上角字段需要后台在接口的extend扩展中添加字段tip_key"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170110/14840499034700538.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170110/14840499034700538.jpg",
                    "value": "YX_N_M_A4F1",
                    "type": "YX_N_M_A4F1",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161209/14812666937120883.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161209/14812666937120883.jpg",
                    "value": "YX_N_M_ACBA",
                    "type": "YX_N_M_ACBA",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "title:标题文字"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161221/14823124571861834.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161221/14823124571861834.jpg",
                    "value": "YX_N_M_B278",
                    "type": "YX_N_M_B278",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "titleImg:上面的标题图片地址", "注：明星与热销需要后台增加extend字段", "flag为1表示明星", "flag为2表示热销"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170105/14836032681770101.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170105/14836032681770101.jpg",
                    "value": "YX_N_M_B53B",
                    "type": "YX_N_M_B53B",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "title: 标题文字", "tip：单行描述(共两行)", "bgColor: 背景颜色", "另外增加字段couponType为1：限时买一赠一,couponType为其他数字：直降x元"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170504/14938739836370580.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170504/14938739836370580.png",
                    "value": "YX_N_M_B53C",
                    "type": "YX_N_M_B53C",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "bgColor: 背景颜色", "leftscroll字段后台配置:左上角横幅标签文案（宽度有限4字以内）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170209/14866118621490036.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170209/14866118621490036.jpg",
                    "value": "YX_N_M_BCD0",
                    "type": "YX_N_M_BCD0",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "titleImg:上面的标题图片地址", "bgColor:整体背景颜色"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170109/14839609227630065.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170109/14839609227630065.jpg",
                    "value": "YX_N_M_BE90",
                    "type": "YX_N_M_BE90",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "leftImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161221/14823032926141800.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161221/14823032926141800.jpg",
                    "value": "YX_N_M_C1C3",
                    "type": "YX_N_M_C1C3",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "titleImg:上面的标题图片地址", "needScenePicUrl: jpg场景图与png图切换"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": " http://mimg.127.net/hz/uploader/20170220/14875878094910081.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170220/14875878094910081.jpg",
                    "value": "YX_N_M_C1C5",
                    "type": "YX_N_M_C1C5",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "needGoodsNum: 设置显示多少个商品", "sideImage: 侧边的图片地址", "sideUrl:侧边图片的跳转链接"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20170221/14876658842720067.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170221/14876658842720067.jpg",
                    "value": "YX_N_M_C1C6",
                    "type": "YX_N_M_C1C6",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "needGoodsNum: 设置显示多少个商品", "sideImage: 侧边的图片地址", "sideUrl:侧边图片的跳转链接"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170418/14924900222871845.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170418/14924900222871845.png",
                    "value": "YX_N_M_C58B",
                    "type": "YX_N_M_C58B",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "backgroundColor:整体背景颜色"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_C_C_slick.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170418/14925030691180080.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170418/14925030691180080.png",
                    "value": "YX_N_M_C58C",
                    "type": "YX_N_M_C58C",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "slickId:轮播图的id,同一个页面的slickid不可重复", "backgroundColor:整体背景颜色", "headerTitle:标题文字", "show_n:1表示显示，不填为空则不显示", "link_n:跳转连接", "img_n:图片地址(图片大小为275x275)", "ps:1、第一行有下拉栏，最多10个制造商可配。2、需要几个制造商对应的每个show都要为1"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_C_C_slick.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161128/14802985110610600.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161128/14802985110610600.jpg",
                    "value": "YX_N_M_C6E9",
                    "type": "YX_N_M_C6E9",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "sideImage:左侧图片地址", "ps：一个模板只可放4个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170223/14878481252450059.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170223/14878481252450059.jpg",
                    "value": "YX_N_M_C88F",
                    "type": "YX_N_M_C88F",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["轮播图模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "titleImg:上面的标题图片地址", "needScenePicUrl: jpg场景图与png图切换"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/swiper.min.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170110/14840499619080539.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170110/14840499619080539.jpg",
                    "value": "YX_N_M_CB4D",
                    "type": "YX_N_M_CB4D",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170110/14840370379940386.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170110/14840370379940386.jpg",
                    "value": "YX_N_M_D45D",
                    "type": "YX_N_M_D45D",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "sideImg: 侧边的图片地址", "sideUrl:侧边图片的跳转链接", "bgColor:整体背景颜色", "needGoodsNum: 设置显示多少个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161128/14803040464190649.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161128/14803040464190649.jpg",
                    "value": "YX_N_M_DB08",
                    "type": "YX_N_M_DB08",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "sideImage:右侧图片地址", "ps：一个模板只可放4个商品"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161212/14815242485321232.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161212/14815242485321232.jpg",
                    "value": "YX_N_M_EAB5",
                    "type": "YX_N_M_EAB5",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["goods模块(适配pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "titleImg:上面的标题图片地址", "tipImg：左上角小图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170310/14891389167980610.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170310/14891389167980610.jpg",
                    "value": "YX_N_M_EB26",
                    "type": "YX_N_M_EB26",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(H5)", "goodsId：商品组Id", "注意：新增extend字段", "1、couponPrice 券后自配价格字段 ", "2、btnText  按钮文案", " 3、btnLink 按钮链接", " 4、oldUserFlag： 设置为 1 则显示下面的tip"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161216/14818543574380739.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161216/14818543574380739.jpg",
                    "value": "YX_N_M_FDC0",
                    "type": "YX_N_M_FDC0",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动和pc端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "tip: 价格范围文案(3个)", "title1:标题左半部分", "title2:标题右半部分"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170302/14884596444211221.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170302/14884596444211221.jpg",
                    "value": "YX_N_M_OABF",
                    "type": "YX_N_M_OABF",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["筛选模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "topic: 该字段用于人气排序,请在pub中创建一个投票将设置的topic的值写入这个字段", "maxPrice: 设置筛选的最大价格(请设置>=这一批商品的最贵的那一个商品的价格)", "pageSize: 一次手机滑动加载商品个数", "showMaker:显示的制造商个数", "needScenePicUrl:jpg场景图与png图切换"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/nouislider.min.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20170221/14876640375800035.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170221/14876640375800035.jpg",
                    "value": "YX_S_M_866E",
                    "type": "YX_S_M_866E",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["轮播图模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl:jpg场景图与png图切换", "backgroundImage: 背景大图片地址", "itemNum: 左侧显示多少个项目", "title: 标题"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/swiper.min.js", "http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js", "http://mimg.127.net/pub/common/js/PSC_C_statistics.js"]
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20170301/14883388916860556.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170301/14883388916860556.jpg",
                    "value": "YX_S_M_CF55",
                    "type": "YX_S_M_CF55",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["筛选模块(适配pc端)", "请先设置需要的制造商数量makerNumber,再填写goodsId", "ps：请保证制造商设置数量和制造商的图片地址数量一致,图片地址为空默认不显示", "goodsId：goods系统的接口id字段(请问后台君要~)", "needScenePicUrl: jpg场景图与png图切换", "itemsOnPage: 默认45个,表示一页展现的商品数量", "topic:该字段用于人气排序,请在pub中创建一个投票将设置的topic的值写入这个字段", "qrcodeLink:二维码的链接", "qrcodeBg: 二维码的背景图", "maxPrice: 设置筛选的最大价格(请设置>=这一批商品的最贵的那一个商品的价格)", "makerNumber: 设置显示制造商的数量", "hotMakerImg: 每个制造商的图片地址"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/nouislider.min.js"]
                }]
            },
            "banner": {
                "title": "Banner模块",
                "modules": [{
                    "img": "https://mimg.127.net/hz/uploader/20170511/14944914200943695.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170511/14944914200943695.png",
                    "value": "YX_N_M_0501",
                    "type": "YX_N_M_0501",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goodsId1:商品组ID", "tab:需要几个tab", "tip1:对应的tab文案", "ps:需要几个tab就填写几个tip"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170120/14848967650250030.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170120/14848967650250030.png",
                    "value": "YX_N_M_5A56",
                    "type": "YX_N_M_5A56",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "title: 线中间的标题", "tipImg：第二行的图片地址", "tip:图片下的描述（共两行可配）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161219/14821507028151318.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161219/14821507028151318.jpg",
                    "value": "YX_S_M_07DA",
                    "type": "YX_S_M_07DA",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["banner模块", "title：顶部标题", "type：第n个的子元素的标题", "tip: 第n个子元素的描述", "btnText: 按钮上的文字", "link: 点击按钮将要跳转的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161205/14809121475660356.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161205/14809121475660356.jpg",
                    "value": "YX_S_M_0AA8",
                    "type": "YX_S_M_0AA8",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "title： 标题", "tip：单行描述", "ps：总共7行描述,留空不填就不显示"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161117/14793668815171343.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161117/14793668815171343.jpg",
                    "value": "YX_S_M_0CE9",
                    "type": "YX_S_M_0CE9",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["banner模块(适配pc端)", "titleImg:上面的标题图片地址", "distrct: 每个商品元素的图片地址(共5个可配)", "backgroundImage: 背景大图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161226/14827198248232662.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161226/14827198248232662.jpg",
                    "value": "YX_S_M_19AB",
                    "type": "YX_S_M_19AB",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "bannerImage: 背景图片地址", "link: 点击图片跳转的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170306/14887905027400412.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170306/14887905027400412.png",
                    "value": "YX_S_M_1D5D",
                    "type": "YX_S_M_1D5D",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["banner模块(下拉可以配置每块列表)", "sidebarImage: 大的背景图", "tit：二维码下面的第一行文字", "tip: 二维码下面的第二行文字", "show_n: 表示是否显示第n个列表,1显示0隐藏", "SpanVal_n：列表块文字描述", "anchar_n: 这个字段填写其他模块的锚点，一般在每个模块的最下面", "功能：在这个模板的anchar中填入不同的模板的锚点，实现点击文字就滑动到对应的一块内容"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170306/14887895039710400.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170306/14887895039710400.jpg",
                    "value": "YX_S_M_22EE",
                    "type": "YX_S_M_22EE",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["goods模块(适配移动端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "注意：需要后台增加extend字段：1、leftdesc字段作为左上角描述。2、btntext字段作为按钮上的文案。"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170209/14866430287250105.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170209/14866430287250105.jpg",
                    "value": "YX_S_M_3311",
                    "type": "YX_S_M_3311",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["banner模块(下拉选择配置内容区)", "show_n: 表示是否显示第n个券,1显示0隐藏", "bgImg_n: 大的背景图片地址", "couponVal_n：优惠券的标题", "couponDesc_n: 优惠券的描述", "coupoBtnText_n: 按钮上的文字", "couponLink_n: 券所指向的链接", "couponBg：一张券的背景图"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170112/14842229407800115.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170112/14842229407800115.jpg",
                    "value": "YX_S_M_35FD",
                    "type": "YX_S_M_35FD",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["bannerImage: 大的背景图", "Link: 图片要跳转的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161226/14827198248382663.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161226/14827198248382663.jpg",
                    "value": "YX_S_M_3DA7",
                    "type": "YX_S_M_3DA7",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "bannerImage: 背景图片地址", "link: 点击图片跳转的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170228/14882650741220077.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170228/14882650741220077.jpg",
                    "value": "YX_S_M_48BB",
                    "type": "YX_S_M_48BB",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["参数tip1: STEP1的值", "参数tip2: STEP2的值", "参数tip3: STEP3的值"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170120/14849011447760139.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170120/14849011447760139.jpg",
                    "value": "YX_S_M_4FDB",
                    "type": "YX_S_M_4FDB",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["banner模块", "bgColor: 背景颜色", "height：表示文字以下的预留高度", "tip: 文字内容"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161216/14818742150761006.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161216/14818742150761006.jpg",
                    "value": "YX_S_M_51E1",
                    "type": "YX_S_M_51E1",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "tip：按钮上的文字", "link：点击按钮跳转向的网址链接", "bgColor: 背景颜色"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20161117/14793539817441331.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20161117/14793539817441331.jpg",
                    "value": "YX_S_M_73D7",
                    "type": "YX_S_M_73D7",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["banner模块(pc端)", "backgroundImage: 背景大图片地址", "tipImg：左上角小图片地址", "titleImg:中间图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "http://mimg.127.net/hz/uploader/20170228/14882630839020041.jpg",
                    "zoom": "http://mimg.127.net/hz/uploader/20170228/14882630839020041.jpg",
                    "value": "YX_S_M_77DE",
                    "type": "YX_S_M_77DE",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["参数tip1: STEP1的值", "参数tip2: STEP2的值", "参数tip3: STEP3的值"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170410/14918259703980005.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170410/14918259703980005.png",
                    "value": "YX_S_M_8857",
                    "type": "YX_S_M_8857",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["轮播图模块(适配PC端)", "goodsId：goods系统的接口id字段(请问后台君要~)", "backgroundColor:背景颜色", "backgroundImg:背景图片地址", "headerImg: 标题图片地址", "shownum:底部导航一次显示商品数量"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_C_C_slick.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161205/14809066191120355.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161205/14809066191120355.jpg",
                    "value": "YX_S_M_97D8",
                    "type": "YX_S_M_97D8",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块(适配pc与移动端)", "dotImage: 中间小元素的图片地址", "height：整体元素的高度", "bgColor： 整体背景颜色"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170425/14930973423350076.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170425/14930973423350076.png",
                    "value": "YX_S_M_A100",
                    "type": "YX_S_M_A100",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner自配高度模块(适配pc端)", "bannerImage: 背景图片地址", "imgHeight:图片高度（必须填写，一般设为图片高度相同）", "link: 点击图片跳转的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161220/14822229722431545.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161220/14822229722431545.jpg",
                    "value": "YX_S_M_A86B",
                    "type": "YX_S_M_A86B",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["banner模块", "bannerImage: 背景大图的图片地址", "link：图片将跳转向的网址链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170112/14842028042970033.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170112/14842028042970033.jpg",
                    "value": "YX_S_M_BF3A",
                    "type": "YX_S_M_BF3A",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["bgImage: 背景图", "Tab: 每个小tab所占百分比", "show_n: 表示第n个tab是否显示,1显示0隐藏", "anchar_n: 填入与每个tab一对一联系的其他模块的锚点", "linkText： Tab的文字内容"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161220/14822033145081424.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161220/14822033145081424.jpg",
                    "value": "YX_S_M_BFA7",
                    "type": "YX_S_M_BFA7",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["banner模块", "title：左上角标题", "tip:子元素的文案描述", "link: 该元素对应的跳转网址链接", "注意（只有填写了link，对应的文案才会显示）"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170109/14839647158100097.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170109/14839647158100097.jpg",
                    "value": "YX_S_M_CE2D",
                    "type": "YX_S_M_CE2D",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["空白栏适配pc端"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170112/14841931301530023.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170112/14841931301530023.jpg",
                    "value": "YX_S_M_D9D0",
                    "type": "YX_S_M_D9D0",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["bgImage: 大背景图", "show_n: 表示是否显示第n个券,1显示0隐藏", "couponVal：表示优惠券的金额", "couponDesc: 对券的描述（按钮上面）", "couponBtnText: 按钮上的文字", "couponLink: 券的地址", "couponTip: 券的补充说明（按钮下面）", "couponBg: 券的背景图"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170109/14839664630630182.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170109/14839664630630182.jpg",
                    "value": "YX_S_M_EA3D",
                    "type": "YX_S_M_EA3D",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["空白栏适配移动端"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20161219/14821145858471145.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161219/14821145858471145.jpg",
                    "value": "YX_S_M_EE29",
                    "type": "YX_S_M_EE29",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["banner模块(宽为1090px)", "bannerImage: 背景大图的图片地址", "link：图片将跳转向的网址链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170303/14885068358471417.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20170303/14885068358471417.jpg",
                    "value": "YX_S_M_F5F5",
                    "type": "YX_S_M_F5F5",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["bannerImage: 大的背景图", "coupon: 券码", "couponLink: 券码链接", "ajaxLink: 请求后台发链接", "popBg: 弹出层背景图"],
                    "libC": [],
                    "libJ": ["http://mimg.127.net/pub/common/js/PSC_YX_C_normal.js"]
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170512/14945544334774367.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170512/14945544334774367.png",
                    "value": "YX_S_M_F5F6",
                    "type": "YX_S_M_F5F6",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["优惠券模块(适配移动端)", "bannerImage: 优惠券背景图", "SignCode:激活码或者券码"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://mimg.127.net/hz/uploader/20170512/14945696803704900.png",
                    "zoom": "https://mimg.127.net/hz/uploader/20170512/14945696803704900.png",
                    "value": "YX_S_M_F5F7",
                    "type": "YX_S_M_F5F7",
                    "suitWeb": false,
                    "suitH5": true,
                    "desc": ["优惠券模块(适配移动端)", "bannerImage: 优惠券背景图", "SignCode:激活码或者券码"],
                    "libC": [],
                    "libJ": []
                }]
            },
            "mail": {
                "title": "直邮模块",
                "modules": [{
                    "img": "https://nos.netease.com/masteruser1/14885277074540004.png",
                    "zoom": "https://nos.netease.com/masteruser1/14885277074540004.png",
                    "value": "YX_N_M_9E47",
                    "type": "YX_N_M_9E47",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "leftUrl：左侧商品链接", "rightUrl: 右侧商品链接", "imgLeft: 左侧图片地址", "imgRight: 右侧图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14885277071480003.png",
                    "zoom": "https://nos.netease.com/masteruser1/14885277071480003.png",
                    "value": "YX_N_M_9E48",
                    "type": "YX_N_M_9E48",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "title: 默认本期特别推荐", "label: 冒号后面加红文字", "desc: 文字描述", "tailImage: 按钮马上打开的图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14885277068280002.png",
                    "zoom": "https://nos.netease.com/masteruser1/14885277068280002.png",
                    "value": "YX_N_M_9E49",
                    "type": "YX_N_M_9E49",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "leftUrl：左侧商品链接", "middleLeftUrl: 第二个商品链接", "middleRightUrl: 第三个商品链接", "rightUrl: 右侧商品链接", "btnUrl：按钮链接", "imgLeft: 左侧图片地址", "imgMiddleLeft: 第二个图片地址", "imgMiddleRight: 第三个图片地址", "imgRight: 右侧图片地址", "label：制造商文案", "name: 商品名称", "price: 价格文案", "additionalInfo: 价格后面额外的小字文案", "desc: 商品描述文案"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14877506250800039.png",
                    "zoom": "https://nos.netease.com/masteruser1/14877506250800039.png",
                    "value": "YX_N_M_9E50",
                    "type": "YX_N_M_9E50",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "leftUrl：左侧商品链接", "middleUrl: 中间商品链接", "rightUrl: 右侧商品链接", "btnUrl：按钮链接", "imgLeft: 左侧图片地址", "imgMiddle: 中间图片地址", "imgRight: 右侧图片地址", "label：制造商文案", "name: 商品名称", "price: 价格文案", "additionalInfo: 价格后面额外的小字文案", "desc: 商品描述文案"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14877506255490040.png",
                    "zoom": "https://nos.netease.com/masteruser1/14877506255490040.png",
                    "value": "YX_N_M_9E51",
                    "type": "YX_N_M_9E51",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "leftUrl：左侧商品链接", "rightUrl: 右侧商品链接", "btnUrl：按钮链接", "imgLeft: 左侧图片地址", "imgRight: 右侧图片地址", "label：制造商文案", "name: 商品名称", "price: 价格文案", "additionalInfo: 价格后面额外的小字文案", "desc: 商品描述文案"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14877506257960041.png",
                    "zoom": "https://nos.netease.com/masteruser1/14877506257960041.png",
                    "value": "YX_N_M_9E52",
                    "type": "YX_N_M_9E52",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "img: 图片地址", "label：制造商文案", "name: 商品名称", "price: 价格文案", "additionalInfo: 价格后面额外的小字文案", "desc: 商品描述文案"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14877506260790042.png",
                    "zoom": "https://nos.netease.com/masteruser1/14877506260790042.png",
                    "value": "YX_N_M_9E53",
                    "type": "YX_N_M_9E53",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "logoUrl: 点击logo图片跳转的链接", "logo: logo的图片地址", "category_img: 菜单栏的每个子菜单图片地址", "category_link: 每个子菜单的链接"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14885278146250005.png",
                    "zoom": "https://nos.netease.com/masteruser1/14885278146250005.png",
                    "value": "YX_N_M_9E54",
                    "type": "YX_N_M_9E54",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "actLink: 点击图片跳转的链接", "actImg：图片地址"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://nos.netease.com/masteruser1/14877506262270044.png",
                    "zoom": "https://nos.netease.com/masteruser1/14877506262270044.png",
                    "value": "YX_N_M_9E55",
                    "type": "YX_N_M_9E55",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["直邮模块(适配pc和移动端)", "actLink: 点击查看更多的链接", "newGoodsLink更多新品的链接"],
                    "libC": [],
                    "libJ": []
                }]
            },
            "rule": {
                "title": "活动规则模块",
                "modules": [{
                    "img": "https://mimg.127.net/hz/uploader/20161221/14822859093801764.jpg",
                    "zoom": "https://mimg.127.net/hz/uploader/20161221/14822859093801764.jpg",
                    "value": "YX_S_M_20BC",
                    "type": "YX_S_M_20BC",
                    "suitWeb": true,
                    "suitH5": true,
                    "desc": ["活动模块", "bgImg: 背景大图片地址", "title: 标题文字", "line: 活动文字描述(最多9行可配)"],
                    "libC": [],
                    "libJ": []
                }, {
                    "img": "https://yanxuan.nosdn.127.net/14940373727090012.jpg",
                    "zoom": "https://yanxuan.nosdn.127.net/14940373727090012.jpg",
                    "value": "YX_S_M_3902",
                    "type": "YX_S_M_3902",
                    "suitWeb": true,
                    "suitH5": false,
                    "desc": ["活动模块", "bgColor: 背景颜色", "title: 标题文字", "line: 活动文字描述(最多9行可配)"],
                    "libC": [],
                    "libJ": []
                }]
            }
        }
    }
}

const store = new Vuex.Store({
    state: {
        currentTab: 'banner',
        modulesList: modulesInfo.yanxuan.modules['banner'].modules,
        showDetail: false,
        currentModule: 'YX_N_M_0501',
        moduleDetail: {},
        currentProduct: 'yanxuan',
        tabs: []
    },
    getters: {
        moduleDetail: state => {
            let modules = modulesInfo.yanxuan.modules[state.currentTab].modules
            return modules.filter((module) => {
                return module.type == state.currentModule
            })[0]
        }
    },
    mutations: {
        'tabChange': (state, curTab) => {
            // debugger
            state.currentTab = curTab
            state.modulesList = modulesInfo[state.currentProduct].modules[state.currentTab].modules
        },
        'productChange': (state, curProduct) => {
            state.currentProduct = curProduct
            state.tabs = !!modulesInfo[state.currentProduct] ? _.keys(modulesInfo[state.currentProduct].modules) : []
            state.modulesList = modulesInfo[state.currentProduct] ? modulesInfo[state.currentProduct].modules[state.currentTab].modules : []
        },
        'listClick': (state, currentModule)　 => {
            let modules = modulesInfo[state.currentProduct].modules[state.currentTab].modules
            let result = []
            state.currentModule = currentModule
            result = modules.filter((module) => {
                return module.type == state.currentModule
            })
            state.moduleDetail = result.length > 0 ? result[0] : {}
            state.showDetail = true
        },
        'closeModal': (state) => {
            state.showDetail = false
        }
    }
})

new Vue({
    el: '#app',
    template: '<App/>',
    store: store,
    components: {
        App
    }
})
