<style scoped>
.modal-vertical-center {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.modal-vertical-center .ivu-modal {
    top: 0;
}

.img-fix {
    /*width: 100%;*/
    display: block;
    max-width: 660px;
    margin: 0 auto;
    max-height: 500px;
}

.content {
    max-height: 600px;
    overflow-y: auto;
    text-align: left;
}

p {
    line-height: 25px;
    font-size: 12px;
    font-weight: normal;
    padding-left: 20px;
}

span {
    line-height: 25px;
    font-size: 12px;
    font-weight: normal;
    padding-left: 20px;
}

pre {
    margin: 0;
}

.desc {
    overflow: hidden;
}

.desc span {
    float: left;
}

.desc p {
    float: left;
    padding-left: 0;
}

.desc table {
    text-align: center;
    color: #666;
    background: #f7f7f7;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid #e3e3e3;
    border-spacing: 0px;
    border-collapse: collapse;
}

th {
    border: 1px solid #e3e3e3;
}

td {
    border: 1px solid #e3e3e3;
}

.td-name {
    width: 120px;
}

.td-desc {
    width: 200px;
}
</style>
<template>
    <Modal :value="showDetail" @on-ok="ok" @on-cancel="cancel" class-name="modal-vertical-center" :title="moduleDetail.value" width="800">
        <div class="content">
            <p>模块名 : {{moduleDetail.value}}</p>
            <p>预览图 : </p>
            <img :src="moduleDetail.zoom" class="img-fix">
            <br>
            <p>支持PC : {{moduleDetail.suitWeb ? '是' : '否'}}</p>
            <p>支持移动端 : {{moduleDetail.suitH5 ? '是' : '否'}}</p>
            <div class="desc">
                <span>配置项信息 : </span>
                <p v-if="moduleDetailDesc.length == 0">暂无配置项</p>
                <table v-else>
                    <tbody>
                        <tr>
                            <th class="th-name">属性名</th>
                            <th class="th-desc">属性描述</th>
                        </tr>
                        <tr v-for="item in moduleDetailDesc">
                            <td class="td-name">{{item.name}}</td>
                            <td class="td-desc">{{item.desc}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>应用方式: </p>
            <blockquote>
                <code>
                    <pre>{{moduleDetail.tpl}}</pre>
                </code>
            </blockquote>
        </div>
    </Modal>
</template>
<script>
export default {
    computed: {
        showDetail() {
            return this.$store.state.showDetail
        },
        moduleDetail() {
            // debugger
            this.$store.state.moduleDetail.tpl = `            <NModule>
                <Name>${this.$store.state.moduleDetail.value}</Name>
                <Data></Data>
            </NModule>`
            return this.$store.state.moduleDetail
        },
        moduleDetailDesc() {
            let desc = this.moduleDetail.desc
            let newDesc = []
            if (desc instanceof Array) {
                desc = desc.filter((value) => {
                    return /:/.test(value)
                })
                desc.forEach((value) => {
                    let newValue = value.split(':')
                    let name = newValue[0]
                    let description = newValue[1]
                    newDesc.push({ name: name, desc: description })
                })
            }
            return newDesc
        },
        tempData() {
            return this.$store.state.tempData
        }
    },
    methods: {
        ok() {
            this.$store.commit('closeModal')
        },
        cancel() {
            this.$store.commit('closeModal')
        },
        getDefaultJson() {
            if (this.tempData[this.moduleDetail.type]) return;
            let type = this.moduleDetail.type
            this.$http.get('http://localhost:49000/pscpub/modulemarket/modules/' + type + '/default.json').then((result) => {
                let data = {}
                data[type] = result.data
                this.$store.commit('updateTempData', data)
                console.log(result.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    updated() {
        this.getDefaultJson()
    }
}  
</script>
