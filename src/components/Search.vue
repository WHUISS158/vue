<template>
    <div>
        <Input placeholder="输入关键字搜索" v-model="value" @on-change="filter">
        </Input>
        <SearchList v-if="showSearchResult" v-model="allModules" :results="list"></SearchList>
    </div>
</template>

<script>
import  SearchList from './SearchList'
export default {
    data() {
        return {
            value: '',
            list: []
        }
    },
    computed: {
        allModules() {
            return this.$store.state.modules
        },
        showSearchResult() {
            return this.$store.state.showSearchResult
        }
    },
    methods: {
        filter() {
            this.$store.state.showSearchResult = true
            let regex = new RegExp(this.value, 'i')
            let results = !!this.value ? this.allModules.filter((module) => {
                return regex.test(module.keywords)
            }) : []
            this.list = results
        }
    },
    components: {SearchList}
}
</script>

<style>

</style>
