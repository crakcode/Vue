<template>
    <div>
        <h2>User</h2>
        <ul class="wrap">User</ul>
        <li class="user" v-for="(user, idx) in items" :key="{idx}">
            {{user.name}}
            {{user.age}}
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
