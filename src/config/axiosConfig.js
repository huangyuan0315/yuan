// https://blog.csdn.net/qq_21423689/article/details/79099127
import axios from 'axios';
import windowsMesssage from '@/plugInUnit/Message/Message';
// axios.defaults.method = 'post';
axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://0.0.0.0:9090/';
//code状态码200判断
axios.interceptors.response.use((res) => {
    if (res.data.code != '200') {
        return res;
    } else {
        console.log('success')
    }
    return res;
}, (error) => {
    let _message = null;
    switch (error.response.status) {
        case 404:
            _message = '404,错误请求'
            break
        case 401:
            // router.push({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
            _message = '未授权'
            break
        case 403:
            _message = '禁止访问'
            break
        case 408:
            _message = '请求超时'
            break
        case 500:
            _message = '服务器内部错误'
            break
        case 501:
            _message = '功能未实现'
            break
        case 503:
            _message = '服务不可用'
            break
        case 504:
            _message = '网关错误'
            break
        default:
            _message = '未知错误'
    }
    windowsMesssage(_message);
});
export default axios;