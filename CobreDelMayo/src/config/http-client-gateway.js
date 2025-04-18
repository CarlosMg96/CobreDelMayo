import axios from "axios";
import Router from "@/router";
import { getTokenDecrypted } from "@/kernel/utils";
const SERVER_URL = process.env.VUE_APP_BASE_URL;

const AxiosClient = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000,
})

export const getServerUrl = () => SERVER_URL;


const setUpInterceptors = (client) => {
    client.interceptors.request.use(
        async function(config){
            const auth_token = await getTokenDecrypted();
            if(auth_token !== undefined && auth_token !== null && auth_token !== ""){
                if(!config.url.includes('auth')){
                    config.headers.Authorization = `Bearer ${auth_token}`;
                }
            }
            return config;
        },
        function(error){
            return Promise.reject(error);
        }
    );

    client.interceptors.response.use(
        (response) => {
            if(response.status === 200 || response.status === 201){
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        (error) => {
            if(!error.response){
                return Promise.reject({response: {status: 502, message: 'Error network', data: {code: 502, message: 'Error network', data: null}}});
            }
            if(error.response.status){
                // console.log(error.response);
                switch(error.response.status){
                    case 401:
                        localStorage.removeItem('token');
                        Router.push({name: 'login'});
                        break;
                    case 403:
                        if(error.response.data.message === 'User disabled') {
                            localStorage.removeItem('token');
                            Router.push({name: 'login'});
                        }
                        break;
                    case 500:
                        if (error.response.data.message === 'Token invalid') {
                            localStorage.removeItem('token');
                            Router.push({name: 'login'});  
                        }

                        if (error.response.data.message === 'Token expired') {
                            localStorage.removeItem('token');
                            Router.push({name: 'login'});
                        }

                        if (error.response.data.message === 'Failed to authenticate token') {
                            localStorage.removeItem('token');
                            Router.push({name: 'login'});            
                        }
                }
                return Promise.reject(error);
            }
            return Promise.reject(error);
        }
    );
};

setUpInterceptors(AxiosClient)

const axiosClientApi = {
    doGet(url, config = {}){
        return AxiosClient.get(url, config)
    },
    doPost(url, data){
        return AxiosClient.post(url, data)
    },
    doPut(url, data){
        return AxiosClient.put(url, data)
    },
    doDelete(url, params){
        return AxiosClient.delete(url, { params })
    },
}


export default axiosClientApi