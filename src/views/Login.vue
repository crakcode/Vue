<template>
<v-app>
    
    <v-app-bar app> 
        <v-app-bar-nav-icon @click="drawer = !drawer">
        </v-app-bar-nav-icon> <v-toolbar-title>Test Application</v-toolbar-title> 
    </v-app-bar> 
        
    <v-main> <v-card class="mx-auto" max-width="344"> 
        <v-card-text> 
            <p class="display-1 text--primary">로그인 화면</p> 
            <div>
                <v-text-field label="아이디" v-model="email"></v-text-field>
                <v-text-field label="비밀번호" v-model="password"></v-text-field>
                <br/>

                <v-btn block @click="login">로그인</v-btn>
            </div>
        </v-card-text> 
            <v-card-actions> 
                <v-btn text color="deep-purple accent-4"> Learn More </v-btn> 
            </v-card-actions> 
        </v-card> 
    </v-main>
</v-app>
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
        }
    },
    methods:{
        async login(){
            const instance = axios.create({
                baseURL: 'http://localhost:3000/',
                  headers: {
                Authorization: 'test1234', // header의 속성
                },
            });
            try{
                const response=await instance.post('http://localhost:8080/login/',{ 
                    email:this.email,
                    name:this.name,
                    password:this.password, })
                const token= response.status==200?response.data:"error";
                sessionStorage.setItem("token",token);
                this.$router.push({path:'Crud'})
            }catch (error){
                alert("error");
                console.log("error")
            }
       },
    }

}

</script>
 
<style scoped>
</style>
