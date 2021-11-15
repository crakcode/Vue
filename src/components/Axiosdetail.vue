<template>
    <div>
    <ul>ss
    <li :key="index" v-for="(item,index) in items" >
        {{ item.writer }} {{index}}
        {{ item.email }}  
        {{ item.phone }}
    </li>
    </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Axios',
    
    data(){
        const index=this.$route.params.index
        return{
            index:index,
            items:[]
        }
    },
    created() {
      this.getData()
    },
    methods:{
        fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/users/').
            then((response)=>{
                    this.items=response.data;
                    console.log(this.items);
                })
            .catch(function(error){
                console.log(error);
            })
        }
    }
}

</script>
