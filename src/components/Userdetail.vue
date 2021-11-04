<template>
    <div>
        <h2>User Detail</h2>
        {{name}}
        
        <div v-for="(person,index) in people" :key="person.id">
            {{person.id}} {{person.name}} {{person.age}} {{index}} 
        </div>

    </div>
</template>

<script>
export default {
    props:['name','people']
    
};

</script>
