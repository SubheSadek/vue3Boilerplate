<template>
    <appSlider></appSlider>
    <appIndex></appIndex>
</template>

<script>
import appSlider from './components/inc/slider.vue'
import appIndex from './components/inc/index.vue'

export default {
    name:'app-home',
    components:{
        appSlider,
        appIndex
    },
    created(){
        
    }
}
</script>