<template>
<div>
    <button @click="changeName">이름 바꾸기</button>
     {{name}}
     <Userdetail :name="name" :people="people"/>
    <button v-on:click="increse">+</button>
    <button v-on:click="decrese">-</button>
     {{count}}
</div>
</template>
 


<script>
import Userdetail from '../components/Userdetail.vue';

export default {
    data(){
        return{
            name:'홍길동',
            count:0,
            people:[
                {id:1,name:'a',age:20},
                {id:2,name:'b',age:21},
                {id:3,name:'c',age:23}
            ],
        }
    },
    components: { Userdetail },
    methods:{
        changeName(){
            this.name="최자";
        },
        increse(){
            this.count++;
        },
        decrese(){
            this.count--;
        }
    }
};
</script>
 
<style scoped>
</style>
