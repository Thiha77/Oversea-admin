import axios from 'axios';
import store from '../store';
const api = axios.create({
    baseURL: 'https://testikportal.management-partners.co.jp/api/',
    // headers: {'Authorization': `Bearer ${store.getters.token}`}
});

api.interceptors.request.use(function (config) {
    if(store.getters.token){
        config.headers.common = {'Authorization': `Bearer ${store.getters.token}`}
   }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default api;
// export default axios;