<style scoped>
.list {
    display: block;
    margin: 10px;
    height: 300px;
}

.row-style {
    margin-bottom: 10px
}
</style>
<template>
    <div>
        <Row :gutter="16">
            <Col span="6" v-for="module in currentModules" :key="module" class="row-style">
            <ModuleCube :module="module"></ModuleCube>
            </Col>
        </Row>
        <Page :page-size="8" :total="total" :show-total="true" :current="currentPage" @on-change="pageChange"></Page>
    </div>
</template>

<script>
import ModuleCube from './ModuleCube'
export default {
    name: 'modulelist',
    props: [],
    computed: {
        modules() { return this.$store.state.modulesList },
        currentModules() { return this.modules.slice((this.currentPage - 1) * 8, this.currentPage * 8)},
        total() { return this.modules.length },
        currentPage() { return this.$store.state.currentPage}
    },
    methods: {
        pageChange(pageNum) {
            this.$store.commit('pageChange', pageNum)
        }
    },
    components: { ModuleCube }
}
</script>


