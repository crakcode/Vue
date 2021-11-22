<template>
<div>
        <div>
id,email,name,passwordW
            <input v-model="email" placeholder="이메일"/> 
            <input v-model="name" placeholder="이름"/> 
            <input v-model="password" placeholder="비밀번호"/> 
            <button @click="register">회원가입</button>
            {{id}}
        </div>
        <div>
            <input v-model="email" placeholder="이메일"/> 
            <input v-model="password" placeholder="비밀번호"/> 
            <button @click="login">회원가입</button>
        </div>
        <div>
            <input v-model="token" placeholder="토큰"/> 
            <button @click="authSource(token)">토큰 보내기</button>

        </div>
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
            password:"",
            token:"",
        }
    },

    methods:{
       register(){
            axios.post('http://localhost:8080/join/',{ 
               email:this.email,
               name:this.name,
               password:this.password, })
       },
        async login(){
            const instance = axios.create({
                baseURL: 'http://localhost:3000/',
                  headers: {
                Authorization: 'test1234', // header의 속성
                },
            });

            const response=await instance.post('http://localhost:8080/login/',{ 
               email:this.email,
               name:this.name,
               password:this.password, })
            const hello= response.status==200?response.data:"error";
            console.log(response)
            console.log(hello)
       },

        async authSource(token){
            console.log(token)
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
                  headers: {
                "X-AUTH-TOKEN":token
                },
            });
            const response=await instance.post('http://192.168.143.237:8080/user/api')
            // const hello= response.status==200?response.data:"error";
            console.log(response)
            // console.log(hello)
       },



    }

}
</script>