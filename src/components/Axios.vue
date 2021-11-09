<template>
    <div>
    <ul>ss
        <li v-if="items.writer">
            {{items.writer}}
        </li>
        <button @click="fetchData">sss</button>

    </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Axios',
    data(){
        return{
            items:{
                writer:""
            }
        }
    },
    methods:{
        fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/users/').
            then(function(response){
                    console.log(response.data);
                    this.items=response.data;
                })
            .catch(function(error){
                console.log(error);
            })
        },

        async getData(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
            console.log(response)
        }

    },
    created() {
      this.fetchData()
    },

}

</script>
