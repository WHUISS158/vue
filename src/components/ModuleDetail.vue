<style>
.modal-vertical-center {
    display: flex;
    align-items: center;
    justify-content: center
}

.modal-vertical-center .ivu-modal {
    top: 0;
}

.img-fix {
    /*width: 100%;*/
    display: block;
    max-width: 760px;
    margin: 0 auto;
    max-height: 600px;
}
</style>
<template>
    <Modal :value="showDetail" @on-ok="ok" @on-cancel="cancel" class-name="modal-vertical-center" :title="moduleDetail.value" width="800">
        <p>模块名 : {{moduleDetail.value}}</p>
        <p>预览图 : </p>
        <img :src="moduleDetail.zoom" class="img-fix">
        <p>支持PC : {{moduleDetail.suitWeb ? '是' : '否'}}</p>
        <p>支持移动端 : {{moduleDetail.suitH5 ? '是' : '否'}}</p>
        <p>应用方式: {{moduleDetail.tpl}}</p>
    </Modal>
</template>
<script>
export default {
    // data() {
    //     return {
    //         moduleInfo: this.$store.state.moduleDetail
    //     }
    // },
    computed: {
        showDetail() {
            return this.$store.state.showDetail
        },
        moduleDetail() {
            // debugger
            this.$store.state.moduleDetail.tpl = `
            <NModule>
                <Name>
                    ${this.$store.state.moduleDetail.value}
                </Name>
                <Data></Data>
            </NModule>`
            return this.$store.state.moduleDetail
        }
    },
    methods: {
        ok() {
            this.$store.commit('closeModal')
        },
        cancel() {
            this.$store.commit('closeModal')
        }
    }
}  
</script>
