<template>
    <div>
        gender: {{ gender }}
    </div>
</template>
 
<script>
import {mapGetters} from "vuex";

export default {
    computed:{
        ...mapGetters(["gender"])    
    }
};
</script>
 
<style scoped>
div{
    flex:1;
}
</style>
