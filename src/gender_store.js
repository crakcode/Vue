import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        gender:''
    },
    getters:{
        gender:state=>(state.gender)
    },
    mutations:{
        male:state=>(state.gender='male'),
        female:state=>(state.counter='female')
    },
    actions:{
        changeMale:context=>context.commit("male"),
        changeFemale:context=>context.commit("female")
    }

})