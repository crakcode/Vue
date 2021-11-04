<template>
<div>
    <div> Todo
      <li class="todo" v-for="({ id, text, isDone }, idx) in todos" :key="idx">                
        {{id}} {{text}} {{isDone}}
        </li>
        {{member.id}} {{member.password}}
     </div>
    <Counter/>
     
</div>
</template>
 


<script>

import Counter from "../components/Counter"
export default {
    props:{
        todos:{type:Array,default:()=>[]},
        member:{type:Array,default:()=>[]}
    },
    components:{
        Counter
    }
};
</script>
 
<style scoped>
</style>
