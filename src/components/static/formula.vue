<template>
<div>
    <h2>模块开发指南</h2>
        <p>
            一、简介 模块使用指南意在对前端开发同学开发具体模块做相对应的说明。
            二、 本地开发
            本地开发的流程如下：

            
            三、模块上传
            将模块上传到线上的流程如下图：
            
            三、使用方式 在本地开发中，如果需要使用相关模块，应该按照下面的方式引入所需模块：
            <pre>
              &ltModule&gt
                  &ltName&gtyxft&lt/Name&gt
                  &ltData&gt&lt/Data&gt
              &lt/Module&gt
          </pre>
          其中Name标签中的内容为模块名，即类似于YX_M_xxx之类的(注意，模块名两端不要有空格，不要有空格，不要有空格)
          Data标签中的数据为需要渲染的数据，什么都不填为使用默认数据。
          本地开发支持混合模式，及在DOM中直接引用相应模块，格式如下：
          <pre>
              &lthtml&gt
                  &ltp&gtcontent&lt/p&gt
                  &ltdiv&gt                     
                        &ltModule&gt
                            &ltName&gtyxft&lt/Name&gt
                        &ltData&gt&lt/Data&gt
                      &lt/Module&gt
                  &lt/div&gt
              &lt/html>
          </pre>
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

</style>
