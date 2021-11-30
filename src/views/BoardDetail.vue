<template>
    <div>


  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            content
          </th>
        <th class="text-left">
            writer
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in items"
          :key="index"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div>
                <v-btn block @click="write()">글불러오기 </v-btn>

  </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'BoardDetail',
    data(){
        const index=this.$route.params.index
        return{
            index:index,
            items:[],
        }
    },
    created() {
      this.rendering()

    },
    methods:{
        async rendering(){
            console.log(this.index);
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
            });
            var response= await instance.post('http://localhost:8080/api/v1/lecture/read')
            console.log("sss",response.data[this.index])
            this.items=response.data[this.index]
            console.log(this.itmes)
        },
        write(){
            this.$router.push({path:'BoardPost'})
        }

    }
}

</script>
