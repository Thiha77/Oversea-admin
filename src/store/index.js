import Vue from "vue";
import Vuex from "vuex";
import { getLoggedinUser } from "../partials/auth";
const user = getLoggedinUser();

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        reg_error: null,
        registeredUser: null,
    },

    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedin = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedin = false;
            state.currentUser = null;
        },
        registerSuccess(state, payload) {
            state.reg_error = null;
            state.registeredUser = payload.user;
        },
        registerFailed(state, payload) {
            state.reg_error = payload.error;
        },
    },

    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedin(state) {
            return state.isLoggedin;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        regError(state) {
            return state.reg_error;
        }, 
        registeredUser(state) {
            return state.registeredUser;
        },
        token(state){
          
            if(state.currentUser && state.currentUser.token)
            {
                return state.currentUser.token;
            }
            return false;
        },
    },

    actions: {
        login(context) {
            context.commit("login");
        }
    },
    modules: {}
});
