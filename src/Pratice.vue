<template>  
  <div>    
    <Header/>
    <div class='wrap'>
    
    <Menu/>
    <Content/>
  </div>
  <Box color='black'/>
  <Box color="purple"/>
  <Box/>

  <Webtoon :items="webtoons"/>
  <User :items="user"/>
  <div id="app">
    {{message}} {{reversedMessage}}

    <input v-model="firstname"/>  
    <input v-model="lastname"/>
    {{getfullName}}
  </div>
      <input v-model="title">
        <h1> {{title}}</h1>

      <input v-model="go">
      {{go}}

  <Left />    
  <Right />
  <router-view/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "@/components/Content";
import Box from "@/components/Box";
import Webtoon from "./components/Webtoon";
import Left from "./components/Left";
import Right from "./components/Right";
import User from "./components/User";
export default {
  data() 
  {    
    return {      
      webtoons: [        
        {          
          name: "햄스터와 그녀",          
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:"http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",        
          isUpdate: true
        },        
          {name: "프롬 스타",          
          link: "http://webtoon.daum.net/webtoon/view/fromstar",          
          img:"http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
          isUpdate: true

          },        
          {          
            name: "위대한 로맨스",          
            link: "http://webtoon.daum.net/webtoon/view/greatromance",          
            img:"http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
            isUpdate: false
          }
          ],
        user: [
        {name:"홍길동", age:23, major:'admin' },
        {name:"홍길순", age:50, major:'art'}
        ]
        ,title:"qwdwqd"
        ,message:"hello world"
        ,firstname:""
        ,lastname:""
    };
  },
  name: "app",
  
  // computed: 연산 결과를 캐싱해주는것을 의미한다. method와 비슷그러나 캐싱기능이 다르다.
  // 연산 결과를 캐싱하여 re-render의 연산을 줄여준다. 
  computed:{
    reversedMessage(){
      return this.message.split("").reverse().join("")
    },
    getfullName(){
      return this.firstname+this.lastname
    }

  },

// watch를 통해서 data 에서 정의한값들의 상태변화를 감시할수있다.
  watch:{
    firstname(val){
      console.log('firstname',val)
    },
    lastname(val){
      console.log('lastname',val)
    }
  },

  components: { 
    // 가져온 component 들을 등록합니다.    
    Header,    
    Menu,    
    Content,
    Box,
    Webtoon,
    Left,
    Right,
    User
    }};

</script>

<style scoped>
h1 {
  color: #03a9f4;
}
.wrap {
  display: flex;
}

</style>
