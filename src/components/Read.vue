<template>
    <div>
        <table>
            <tr>
                <td>아이디</td>
                <td>패스워드</td>
                <td>이름</td>
            </tr>
            <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>
        </table>
        <button @click="write">글쓰기</button>
    </div>
</template>
<script>
// import Detail from "./Detail";
import info from '@/data/info.js'; 
import data from '@/data'; 
export default {
    name:'Read',
    data(){
        return{
            info:info,
            data:data
        }
    },
    methods:{
        write(){
            this.$router.push({
                path:'create'
            })
        },
        detail(index){
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId: index
                }
            })

        },
        consol(index){
            console.log(index)

        }

    }

}

</script>
