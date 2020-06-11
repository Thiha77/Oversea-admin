import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueI18n from 'vue-i18n';
import en from '../src/lang/en';
import ja from '../src/lang/ja';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

const languages = {
    en: en,
    ja: ja,
}
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'ja',
    messages: languages,
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
