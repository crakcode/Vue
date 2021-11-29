<template>
    <div>
    <ul>게시판 강의 목록 보기
    <li :key="index" v-for="(item,index) in items" @click="ClickEvent(index)" >
        
        {{ item.title }} {{index}}
        {{ item.content }}  
        {{ item.user.email }}
    </li>
        <!-- <img src="https://view01.wemep.co.kr/wmp-board/59/202010/20/x9d84mhzatle_faq.jpg"/> -->
    </ul>

    <v-data-table
        :items="items"
    ></v-data-table>


    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Axios',
    data(){
        return{
            items:[]
        }
    },
    created() {
      this.rendering()

    },
    methods:{
        // fetchData(){
        //     axios.get('https://jsonplaceholder.typicode.com/users/').
        //     then((response)=>{
        //             this.items=response.data;
        //             console.log(this.items);
        //         })
        //     .catch(function(error){
        //         console.log(error);
        //     })
        // },

        // async getData(){
        //     const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
        //     this.items=response.data;
        //     console.log(this.items[0])
        //     console.log(response)
        // },
        // ClickEvent(index){
        //     this.$router.push({
        //         name: 'restdetail',
        //         params: {
        //             index: index
        //         }
        //     })
        //     console.log(index);
        // },

        async rendering(){
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
            });
            var response= await instance.post('http://localhost:8080/api/v1/lecture/read')
            console.log(response.data)
            this.items=response.data
        }

    }
}

</script>
