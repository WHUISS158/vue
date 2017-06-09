<template>
    <Modal v-model="show">
        <div>
<Carousel>
            <Carousel-item>
                <div class="demo-carousel">1</div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">2</div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">3</div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">4</div>
            </Carousel-item>
        </Carousel>
        </div>
        
    </Modal>
</template>
<script>
    export default{
        data() {
            return {
                show: true
            }
        }
    }
</script>
<style scoped>
.demo-carousel {
    width: 100%;
    height: 300px;
    background: gray;
}
</style>
