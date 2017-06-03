<style scoped>
.img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
}

.img-fix {
    display: flex;
    height: 260px;
    margin-bottom: 20px;
    align-content: center;
    align-items: center;
}
</style>
<template>
    <a class="list" @click="listClick">
        <div class="img-fix">
            <img :src="module.zoom" :alt="module.value+'缩略图'" class="img">
        </div>
        <div>
            <span>{{module.value}}</span>
        </div>
    </a>
</template>

<script>
export default {
    props: ['module'],
    methods: {
        listClick() {
            this.$store.commit('listClick', this.module.type)
        }
    }
}
</script>

