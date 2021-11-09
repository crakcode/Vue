<template>
<div>
  <div v-bind:class="['box',color,w,h]"
       v-bind:style="{ width: w + 'px', height: h + 'px' }">
  </div>
         <button v-on:click="getColor"> ss</button>
</div>
</template>
 
<script>
export default {
    props:{
        color:{type: String, default:''},
        w:{type: Number, default:40},
        h:{type: Number, default:80}
    },
    data(){
        return{
            width:40,
            height:80
        };
    },
    methods:{
        getColor(){
            console.log(this.props);
            return this.props;
        }
    }

};
</script>
 
<style scoped>
.box{
    border:1px solid ;
}
.purple {  background: #8f46ff;}
</style>
