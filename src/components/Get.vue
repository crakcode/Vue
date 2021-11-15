<template>
    <div>
    <!-- <li v-for="(user,index) in users" :key="index"> -->
        {{users.id}}
        {{users.username}}
        {{users.password}}
        ss
    <!-- </li> -->

        <!-- <img src="https://view01.wemep.co.kr/wmp-board/59/202010/20/x9d84mhzatle_faq.jpg"/> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Axios',
    data(){
        return{
            users:[]
        }
    },
    created() {
      this.getData()
    },
    methods:{
        async getData(){
            const response = await axios.get('http://localhost:8080/userinfo')
            this.users=response.data
            console.log(this.users)
        },

    }
}

</script>
