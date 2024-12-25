import axios from "axios";

axios.defaults.baseURL = 'https://admin.findsreps.com/api';

const request = axios.create();


// 请求拦截器: 拦截器 =》 在发送请求时需要做什么
request.interceptors.request(config => {
    const token = localStorage.getItem('token'); 
    if(token) {
        config.headers['authorization'] = token;
    }

    return config;
})

// 响应拦截器
request.interceptors.response((response) => {
    if(response.code !== 200) {
        return console.error('错误');
    }

    return response.data;
});

export default  request;