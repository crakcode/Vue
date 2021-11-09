<template>
    <div>
    <ul>ss
    <li :key="index" v-for="(item,index) in items" @click="ClickEvent(index)" >
        {{ item.writer }} {{index}}
        {{ item.email }}  
        {{ item.website }}
    </li>
        <img src="https://view01.wemep.co.kr/wmp-board/59/202010/20/x9d84mhzatle_faq.jpg"/>
    </ul>
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
      this.getData()
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

        async getData(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
            this.items=response.data;
            console.log(response)
        },
        ClickEvent(index){
            console.log(this.itmes[index]);
        }

    }
}

</script>
