<template>
    <div class="md">
        <h1>
            <center>模块使用指南</center>
        </h1>
    
        <h3>一、简介</h3>
    
        <p>&emsp;&emsp;模块使用指南意在对前端开发同学在本地进行开发时使用模块的方式进行相关说明。</p>
    
        <h3>二、 本地开发</h3>
    
        <p>&emsp;&emsp;本地开发使用模块的流程如下图：</p>
    
        <p>
            <center>
                <img alt="" src="https://yanxuan.nosdn.127.net/14972511780037455.png" />
            </center>
        </p>
    
        <h3>三、 使用方式</h3>
    
        <p>&emsp;&emsp;使用方式 在本地开发中，如果需要使用相关模块，应该按照下面的方式引入所需模块：</p>
    
        <blockquote>
            <pre><code>
        &lt;Module&gt;
            &lt;Name&gt;yxft&lt;/Name&gt;
            &lt;Data&gt;&lt;/Data&gt;
        &lt;/Module&gt;</code></pre>
        </blockquote>
    
        <p>&emsp;&emsp;其中Name标签中的内容为模块名，即类似于YX _M_xxx之类的(注意，模块名两端不要有空格，不要有空格，不要有空格)。
        </p>
    
        <p>&emsp;&emsp;Data标签中的数据为需要渲染的数据，什么都不填为使用默认数据。本地开发支持混合模式，即在DOM中直接引用相应模块，格式如下：</p>
    
        <blockquote>
            <pre><code>
        &lt;Module&gt;
            &lt;Name&gt;yxhd&lt;/Name&gt;
            &lt;Data&gt;&lt;/Data&gt;
        &lt;/Module&gt;
        &lt;p&gt;content&lt;/p&gt;
        &lt;div&gt;
            &lt;Module&gt;
                &lt;Name&gt;yxft&lt;/Name&gt;
                &lt;Data&gt;&lt;/Data&gt;
            &lt;/Module&gt;
        &lt;/div&gt;
        </code></pre>
        </blockquote>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.md {
    width: 70%;
    margin: 0 auto;
    text-align: left;
}

h3 {
    line-height: 45px;
    font-size: 18px;
}

p {
    line-height: 35px;
    font-size: 14px;
    font-weight: bold;
}
pre{
    font-weight: bold;
}
</style>
