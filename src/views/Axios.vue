<template>  
  <div id="app">    
        <button v-on:click="hideName"> 이름 숨기기</button>

      <button v-on:click="getData">ss</button>
  </div>
</template>

<script>
export default {
    el:"#app",
    methods:{
        getData() {
            console.log("sss");
            alert("helloworld");
            this.$http.get(`https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json`) // 해당 url에서 제공하는 데이터를 가져옴.
                .then(function(response) {
                  console.log(response);    // 버튼을 클릭하여 해당 URL로 HTTP GET 요청을 보내면 response 출력.
                  console.log(JSON.parse(response.data));
                });
        },
        hideName(){
            console.log("hwllorodld");
            return 'helloworld';
        }

    }
};
</script>

<style >
</style>
