import {createRouter, createWebHistory} from 'vue-router'
import Lists from '../components/student/Lists.vue';
import Add from '../components/student/Add.vue'
import View from '../components/student/View.vue'
import Edit from '../components/student/Edit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path:'/',
        name:'list',
        component:Lists
    },
    
    {
        path:'/add',
        name:'add',
        component:Add
    },
    {
        path:'/edit',
        name:'edit',
        component:Edit
    },
    {
        path:'/view',
        name:'view',
        component:View
    },
    {
        path:'/pathMatch(.*)*',
        name:'NotFound',
        component:NotFound
    },

];
const router = createRouter ({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes,
});
export default router;