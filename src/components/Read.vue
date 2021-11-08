<template>
    <div>
        <table>
            <tr>
                <td>아이디</td>
                <td>패스워드</td>
                <td>이름</td>
            </tr>
            <tr :key="index" v-for="(value,index) in info">
                <td>{{value.id}}</td>
                <td>{{value.password}}</td>
                <td>{{value.name}}</td>
            </tr>
        </table>
        <button @click="write">글쓰기</button>
        <button @click="console">로그</button>
    </div>
</template>
<script>

import info from '@/data/info.js'; 
export default {
    name:'Read',
    data(){
        return{
            info:info
        }
    },
    methods:{
        write(){
            this.$router.push({
                path:'create'
            })
        },
    }

}

</script>
