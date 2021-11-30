<template>
<div>
  
  
    <v-app-bar app> 
        <v-app-bar-nav-icon @click="drawer = !drawer">
        </v-app-bar-nav-icon> <v-toolbar-title>Test Application</v-toolbar-title> 
    </v-app-bar> 

    <v-main> 

    <v-card class="mx-auto" max-width="344"> 
    <v-card-text> 
        <p class="display-4 text--primary">로그인 화면</p> 
    <div>
    <v-text-field v-model="title"
      label="강의제목"
        ></v-text-field>
    <v-textarea
    v-model="content"
      background-color="grey"
      label="Label"
    ></v-textarea>
    <v-btn @click="[write(),next()]"    elevation="2"   >글 작성완료</v-btn>
    </div>
        </v-card-text> 
        </v-card> 
    </v-main> 


</div>
</template>

<script>
import axios from 'axios';

export default {
    name:"BoardPost",
    data(){
        return{
            title:"",
            content:"",
            score:0,
            comment:"",
            l_id:"",
        }
    },
    methods:{
        write(){
            var token=sessionStorage.getItem("token");
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
                  headers: {
                "X-AUTH-TOKEN":token
                },
            });
            instance.post('http://localhost:8080/api/v1/lecture/write',{ 
               title:this.title,
               content:this.content})
        },
        next(){
            this.$router.push({path:'board'})
            this.$router.go();
        },
    }

};

</script>
