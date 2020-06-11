import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from '../src/api/apiBasePath';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueI18n from 'vue-i18n';
import en from '../src/lang/en';
import jp from './lang/jp';

Vue.use(api)
Vue.prototype.$api = api
Vue.config.productionTip = false;

const languages = {
    en: en,
    jp: jp,
}
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'jp',
    messages: languages,
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
