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
           @click="ClickEvent(index)"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.user.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div>
                <v-btn block @click="write()">글쓰기</v-btn>

  </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Board',
    data(){
        return{
            items:[]
        }
    },
    created() {
      this.rendering()

    },
    methods:{
        async rendering(){
            const instance = axios.create({
                baseURL: 'http://localhost:8080/',
            });
            var response= await instance.post('http://localhost:8080/api/v1/lecture/read')
            console.log(response.data)
            this.items=response.data
        },
        write(){
            this.$router.push({path:'BoardPost'})
        },
        ClickEvent(index){
            this.$router.push({
                name: 'boarddetail',
                params: {
                    index: index
                }
            })
        }

    }
}

</script>
