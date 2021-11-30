<template>
<v-app>
    
    <v-app-bar app> 
        <v-app-bar-nav-icon @click="drawer = !drawer">
        </v-app-bar-nav-icon> <v-toolbar-title>Test Application</v-toolbar-title> 
    </v-app-bar> 
        
    <v-main> 
        
        <v-card class="mx-auto" max-width="344"> 
        <v-card-text> 
            <p class="display-1 text--primary">회원가입</p> 
            <div>
                <v-text-field label="아이디" v-model="email"></v-text-field>
                <v-text-field label="이름" v-model="name"></v-text-field>
                <v-text-field label="비밀번호" v-model="password"></v-text-field>
                <br/>

                <v-btn block @click="register()">회원가입</v-btn>
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
    name:"Register",
    data(){
        return {
            id:this.id,
            email:"",
            name:"",
            password:"",
        }
    },
    methods:{
       async register(){
            var response=await axios.post('http://localhost:8080/check/'+this.email)
            if (response.data==true ){
                alert("email is duplicated so choose other email")
            }
            else{
                try{
                    axios.post('http://localhost:8080/join/',{ 
                        email:this.email,
                        name:this.name,
                        password:this.password, })
                    this.$router.push({path:'Login'})
                }catch{
                    alert("error")
                }
                

            }
       },
    }

}

</script>
 
<style scoped>
</style>
