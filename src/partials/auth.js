import { api }  from '../api/apiBasePath';
export function registerUser(credentials){
    return new Promise((res,rej)=>{
        api.post('/auth/register', credentials)
        .then(response => {
            res(response.data);
        })
        .catch(err => {
            rej('An error occured.. try again later.'+ err)
        })
    })
}

export function login(credentials){
    return new Promise((res,rej)=>{
        api.post('/auth/login', credentials)
        .then(response => {  
            console.log(response.data)          
            res(response.data);
        })
        .catch(err => {
            rej('Wrong Email/Password combination.'+ err)
        })
    })
}

export function getLoggedinUser(){
    const userStr = localStorage.getItem('user');

    if(!userStr){
        return null
    }

    return JSON.parse(userStr);
}