<template>
    <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
        <button @click="write">뒤로가기</button>

        <input v-model="id" placeholder="글쓴이"/>
        <input v-model="password" placeholder="제목"/>
        <textarea v-model="name" placeholder="내용"/>
        <button @click="register">register</button>
        <button @click="log">lgo</button>


    </div>
</template>
<script>
import data from '@/data'
import info from '@/data/info.js'; 

export default {
    name:'Create',
    data(){
        return{
            data:data,
            info:info,
            writer:"",
            title:"",
            content:"",
        }
    },
    methods:{
        write(){
            this.data.push({
                writer:this.writer,
                title:this.title,
                content:this.content
            })
            this.$router.push({path:'/read'})
        },
        register(){
            this.info.push({
                id:this.id,
                password:this.password,
                content:this.content
            })

        },

        log(){
            console.log(this.info)
        }

    }

}

</script>
