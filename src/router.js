import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Axios from "./components/Axios";
import Vuex from "./views/Vuex";
import User from "./views/User";
import Crud from "./views/Crud";
import Login from "./views/Login";
import Ui from "./views/Ui";
import BoardPost from "./views/BoardPost";
import Pratice from "./Pratice";
import Read from "./components/Read";
import Create from "./components/Create";
import Detail from "./components/Detail";
import rest from "./components/Axios";
import restdetail from "./components/Axiosdetail";
import Get from "./components/Get";
import Post from "./components/Post";
import Register from "./views/Register";
import Board from "./views/Board";
import BoardDetail from "./views/BoardDetail";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"history",
    routes:
    [
        {path:"/rest",component:rest},
        {path:"/home",component:Home},
        {path:"/rest/detail/:index",name:"restdetail",component:restdetail},
        {path:"/get",name:"get",component:Get},
        {path:"/post",name:"post",component:Post},
        {path:"/board",name:"board",component:Board},
        {path:"/boardpost",name:"boardpost",component:BoardPost},
        {path:"/boarddetail/:index",name:"boarddetail",component:BoardDetail},
        {path:"/register",name:"register",component:Register},
        {path:"/",component:Read},
        {path:"/practice",component:Pratice},
        {path:"*",component:ErrorPage},
        {path:"/axios",component:Axios},
        // {path:"/todo",component:SApp},
        {path:"/vuex",component:Vuex},
        {path:"/login",component:Login},
        {path:"/user",component:User},
        {path:"/Crud",component:Crud},
        {path:"/ui",component:Ui},
        {path:"/create/:contentId?",name:'Create',component:Create},
        {path:"/detail/:contentId",name:'Detail',component:Detail},
    ]
});

export default router;
