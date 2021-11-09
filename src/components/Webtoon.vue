<template>
    <div>
        <h2>webtoon</h2>
        <ul class="wrap">webtoon</ul>
        <li class="item" v-for="(item, idx) in items" :key="{idx}">
            <a :href="item.link" target="_blank">          
            <img :src="item.img">          
            <span class="tit">제목: {{item.name}}</span>        
            </a>      
            <span class="tag" v-if="item.isUpdate">N</span>
            <span class="tag" v-else>Y</span>
        </li>
    </div>
</template>

<script>
export default {
    props:{
        items:{type:Array, default:()=>[]}
    }
};

</script>
