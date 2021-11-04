<template>  
  <div>    
  <Box color='black' w=2000 h=500/>
  <Box color="purple"/>
  <Box/>
  </div>
</template>
<script>
import Box from "@/components/Box";
export default {
  name: "app",

  // computed: 연산 결과를 캐싱해주는것을 의미한다. method와 비슷그러나 캐싱기능이 다르다.
  // 연산 결과를 캐싱하여 re-render의 연산을 줄여준다. 
  components: { 
    // 가져온 component 들을 등록합니다.    
    Box,
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
