<template>
    <div>
        {{users.id}}
        {{users.username}}
        {{users.password}}
    
    <li v-for="(user,index) in user_list" :key="index">
        {{user.id}}
        {{user.username}}
        {{user.password}}

    </li>

        <!-- <img src="https://view01.wemep.co.kr/wmp-board/59/202010/20/x9d84mhzatle_faq.jpg"/> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Axios',
    
    data(){

        return{
            users:[],
            user_list:[]
        }
    },
    created() {
      this.getData()
      this.getUserList()
    },
    methods:{
        async getData(){
            const response = await axios.get('http://localhost:8080/userinfo')
            const config = axios.create({
                baseURL: process.env.VUE_APP_API_URL,
                headers: {
                Authorization: 'test1234',},})
            console.log(config);

            this.users=response.data
            console.log(this.users)
        },
        async getUserList(){
            const response = await axios.get('http://localhost:8080/userlist')
            console.log(this.user_list)
            this.user_list=response.data
        },

    }
}

</script>
