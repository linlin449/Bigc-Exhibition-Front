import axios from 'axios';

axios.defaults.baseURL = '/api';

const service = axios.create({
    timeout: 10000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
    },
})
service.interceptors.request.use(
    config => {
        //TODO 在请求头中添加token
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        //TODO 拦截返回数据,根据code进行不同处理
        return res
    },
    error => {
        console.log("请求异常", error.config.url);
    }
)
export default service