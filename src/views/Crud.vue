<template>
<div>
    <div>
        강의 생성하기
            <input v-model="title" placeholder="강의 제목"/> 
            <input v-model="content" placeholder="강의 내용"/> 
            <button @click="write()">글 작성완료</button>

    </div>
<form method="post" action="http://localhost:8080/api/v1/lecture/file" enctype="multipart/form-data">
        <input multiple type="file" name="files">
    <button>submit</button>
</form>

    <div>
        강의 평가하기
            <input v-model="l_id" placeholder="강의 번호"/> 
            <input v-model="score" placeholder="강의 제목"/> 
            <input v-model="comment" placeholder="강의 내용"/> 
            <button @click="review()">글 작성완료</button>


    <div>
    
    </div>

    </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
    name:"Crud",
    data(){
        return{
            title:"",
            content:"",
            score:0,
            comment:"",
            l_id:""
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
        review(){
            var token=sessionStorage.getItem("token");
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
                  headers: {
                "X-AUTH-TOKEN":token
                },
            });
            instance.post('http://localhost:8080/api/v1/review/write/'+this.l_id,{ 
               score:this.score,
               comment:this.comment})
        }

    }

};

</script>
