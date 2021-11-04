<template>
    <div> SApp ww
        <Todo :todos="todos"/>
    </div>
</template>
 
<script>
import Todo from "./Todo";

export default {

    data(){
        return{
            todos:[
            {id:new Date(),text:"Vue공부하기",isDone:true},
            {id:new Date()+1,text:"치킨먹기",isDone:false}
            ],
        }
    },

    compoents:{
        Todo,
    }

};
</script>
 
<style scoped>
</style>
