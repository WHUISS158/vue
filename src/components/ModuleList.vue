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
            <Col span="6" v-for="module in modules" :key="module" class="row-style">
                <ModuleCube :module="module"></ModuleCube>
            </Col>
        </Row>
        <ModuleDetail></ModuleDetail>
    </div>
</template>

<script>
import ModuleDetail from './ModuleDetail'
import ModuleCube from './ModuleCube'
export default {
    name: 'modulelist',
    props: [],
    computed: {
        modules() { return this.$store.state.modulesList }
    },
    components: { ModuleDetail, ModuleCube }
}
</script>


