<template>
    <div>
        <button @click="changeMale">male</button>
        <button @click="changeFemale">female</button>
    </div>
</template>
 
<script>
import {mapActions} from "vuex";

export default {
    methods:{
        ...mapActions(["changeMale","changeFemale"])
    }
};
</script>
 
<style scoped>
div{
    flex:1;
}
</style>
