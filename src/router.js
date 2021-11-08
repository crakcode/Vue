import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Axios from "./views/Axios";
import SApp from "./views/SApp";
import Vuex from "./views/Vuex";
import User from "./views/User";
import Pratice from "./Pratice";
import Read from "./components/Read";
import Create from "./components/Create";

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"history",
    routes:
    [
        {path:"/",component:Home},
        {path:"/practice",component:Pratice},
        {path:"*",component:ErrorPage},
        {path:"/axios",component:Axios},
        {path:"/todo",component:SApp},
        {path:"/vuex",component:Vuex},
        {path:"/user",component:User},
        {path:"/read",component:Read},
        {path:"/create",component:Create},
    ]
});

export default router;
