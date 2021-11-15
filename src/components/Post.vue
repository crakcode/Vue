<template>
        <div>
id,email,name,password
            <input v-model="id" placeholder="아이디"/> 
            <input v-model="email" placeholder="이메일"/> 
            <input v-model="name" placeholder="이름"/> 
            <input v-model="password" placeholder="비밀번호"/> 
            <button @click="write">회원가입</button>
            {{id}}
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Post",
    data(){

        return {
            id:this.id,
            email:"",
            name:"",
            password:""
        }
    },

    methods:{
       write(){
            axios.post('/join/',{ 
            id:this.id,
               email:this.email,
               name:this.name,
               password:this.password, })
       } 

    }

}
</script>