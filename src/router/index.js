import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import PublicPage from '../components/public/public-layout';
import adminPage from '../components/admin/AdminLayout';
// import Public from './public';
import admin from './admin';
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue';
import Unauthorized from '../components/UnauthorizedPage.vue'; 

Vue.use(VueRouter);

const routes = [
    // {
    //     path: '/',
    //     component: PublicPage,
    //     children: Public,        
    // },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/Unauthorized',
        name: 'Unauthorized',
        component: Unauthorized,
    },
    {
        path: '/admin',
        component: adminPage,
        children: admin,
        
    },
   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    
  if(to.meta.reqiuresAuth){
    const authUser = store.getters.currentUser
    if(!authUser || !authUser.token){
      next({name:'login'})
    }
    else if(authUser || authUser.token){
        console.log("authUser")
      // for admin 
       if(to.meta.admin){
        const authUser = store.getters.currentUser
        if(authUser.role === 1){
          next()
        }else{
          next({name:'Unauthorized'})
        }
      }
      // for User component
     if(to.meta.jobseeker){
      const authUser = store.getters.currentUser
      if(authUser.role === 3){
        next()
      }else{
        next({name:'Unauthorized'})
      }
    }
      next()
    }
  }
  else{
    next()
  }
})
// important script for component permission

export default router;
