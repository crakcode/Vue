import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
// import Home from "./views/Home";
import Axios from "./views/Axios";
import Vuex from "./views/Vuex";
import User from "./views/User";
import Pratice from "./Pratice";
import Read from "./components/Read";
import Create from "./components/Create";
import Detail from "./components/Detail";
import rest from "./components/Axios";
import restdetail from "./components/Axiosdetail";
import Get from "./components/Get";
import Post from "./components/Post";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"history",
    routes:
    [
        {path:"/rest",component:rest},
        {path:"/rest/detail/:index",name:"restdetail",component:restdetail},
        {path:"/get",name:"get",component:Get},
        {path:"/post",name:"post",component:Post},
        {path:"/",component:Read},
        {path:"/practice",component:Pratice},
        {path:"*",component:ErrorPage},
        {path:"/axios",component:Axios},
        // {path:"/todo",component:SApp},
        {path:"/vuex",component:Vuex},
        {path:"/user",component:User},
        {path:"/create/:contentId?",name:'Create',component:Create},
        {path:"/detail/:contentId",name:'Detail',component:Detail},
    ]
});

export default router;
