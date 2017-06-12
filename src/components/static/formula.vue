<template>
    <div class="md">
        <h1>
            <center>模块开发指南</center>
        </h1>
    
        <h3>一、简介</h3>
    
        <p>&emsp;&emsp;模块使用指南意在对前端开发同学在本地进行开发时使用模块的方式进行相关说明。</p>
    
        <h3>二、 模块开发</h3>
    
        <p>&emsp;&emsp;在本地进行模块开发的流程图如下：</p>
    
        <p>
            <center>
                <img alt="" src="https://yanxuan.nosdn.127.net/14972511776367453.png" />
            </center>
        </p>
    
        <p>&emsp;&emsp;初次进行本地开发时请从
            <a href="https://git.mail.netease.com/activity/pub/ModuleLibs">https://git.mail.netease.com/activity/pub/ModuleLibs</a>上获取模块仓库和
            <a href="https://git.mail.netease.com/activity/pub/scaffold2">https://git.mail.netease.com/activity/pub/scaffold2</a>获取脚手架本地开发环境。</p>
    
        <p>&emsp;&emsp;进行本地开发时，进入脚手架项目的src/assets/componentes/page/modules目录下新建模块目录，按照原有的模块准备好相应的文件，后续开发时主要针对模板、css和js文件进行开发。开发完后如果需要进行效果之类的验证，进入上一级目录，运行npm run update指令(如果是第一次开发请先npm install安装依赖)，然后进入本地脚手架的环境进行查看确认正确性。确认之后，进入模块仓库的文件夹中，checkout新的分支，将新开发的模块整文件夹copy至模块仓库的项目中，通过git push进行提交。提交完成后请相关负责同学在review后合并入master分支，线上就可使用该模块。</p>
    
        <h3>三、 模块发布上线</h3>
    
        <p>&emsp;&emsp;模块发布上线的流程如下图：</p>
    
        <p>
            <center>
                <img alt="" src="https://yanxuan.nosdn.127.net/14972511779027454.png" />
            </center>
        </p>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         data: '123'
    //     }
    // }
}
</script>

<style>
.md {
    width: 70%;
    margin: 0 auto;
    text-align: left;
}
h3{
    line-height: 45px;
    font-size: 18px;
}
p{
    line-height: 35px;
    font-size: 14px;
    font-weight: bold;
}
</style>
