<template>
    <div>
            <input v-model="title" placeholder="제목"/> 
            <input v-model="content" placeholder="내용"/> 
            <button @click="write()">글 작성완료</button>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Crud",
    data(){
        return{
            title:"",
            content:""

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
        }
    }

};

</script>
