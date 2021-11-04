<template>  
  <div id="app">    
      <button v-on:click="increase">+</button>
      <button v-on:click="decrese">-</button>
    {{cnt}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            cnt:0
        }
    },
    methods:{
        increase() {
            this.cnt++;
        },
        decrese(){
            this.cnt--;
        }
    }
};
</script>

<style >
</style>
