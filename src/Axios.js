import Axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

Axios.defaults.baseURL = 'https://ik-react-task.herokuapp.com';
Axios.defaults.headers.post['Content-Type']=
'application/json';

Axios.defaults.headers.put['Content-Type']='application/json';

export const axiosInstance = Axios.create({});
axiosInstance.interceptors.request.use(
    async(config) => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        console.log('config',config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);