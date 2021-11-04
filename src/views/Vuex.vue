<template>
<div>
    <left />    
    <right />
    <GenderLeftVue/>
    <GenderRightVue/>
    <button @click="sss"> ss</button> 
</div>
</template>
 
<script>
import GenderLeftVue from '../components/GenderLeft.vue';
import GenderRightVue from '../components/GenderRight.vue';
import Left from '../components/Left.vue';
import Right from '../components/Right.vue';

export default {
    components:{
        Right,
        Left,
        GenderLeftVue,
        GenderRightVue
    },
    methods:{
        sss(){
            console.log(this.$store.counter);
            console.log("hello world");
        }
    }
};
</script>
 
<style>
</style>
