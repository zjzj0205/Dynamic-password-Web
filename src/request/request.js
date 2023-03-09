import axios from "axios"
import { Message } from 'element-ui'

const instance = axios.create({
    // baseURL: "http://127.0.0.1:8081",
    baseURL: "http://110.40.169.124:6550",
    timeout: 10000
})

// 请求拦截器   
// instance.interceptors.request.use(config => {
//     let token = localStorage.getItem("token");

//     if(token){
//         config.headers = config.headers || {};
//         config.headers["token"] = token;
//     }
//     return config
// }, err => {
//     return Promise.reject(err)
// })

//响应拦截器
instance.interceptors.response.use(res => {
    // 统一管理错误提示
	console.log('拦截器响应成功')
    let data = res.data  
    if(data.code!==200){
        Message({
            message: data.msg || "网络请求错误",
            type: 'error'
        });
        
    }
    return data  
}, err => {
    return Promise.reject(err)
})


// axios.interceptors.response.use(
// 	response => {
// 		console.log('拦截器响应成功')
// 		return response
// 	},
// 	error => {
// 		console.log('拦截器响应失败')
// 		console.log(error)
// 		if(error.request){
// 			console.log(error.request)
// 		} else if(error.response){
// 			console.log(error.response.data);
// 			console.log(error.response.status);
// 		}
// 		if (error && error.response) {
// 			switch (error.response.status) {
// 				case 400: error.message = '请求错误(400)'; 
// 					break;
// 				case 401: error.message = '未授权，请重新登录(401)';
// 					break;
// 				case 403: error.message = '拒绝访问(403)';
// 					break;
// 				case 404: error.message = '请求出错(404)'; 
// 					break;
// 				case 408: error.message = '请求超时(408)'; 
// 					break;
// 				case 500: error.message = '服务器错误(500)'; 
// 					break;
// 				case 501: error.message = '服务未实现(501)'; 
// 					break;
// 				case 502: error.message = '网络错误(502)'; 
// 					break;
// 				case 503: error.message = '服务不可用(503)'; 
// 					break;
// 				case 504: error.message = '网络超时(504)'; 
// 					break;
// 				case 505: error.message = 'HTTP版本不受支持(505)';
// 					break;
// 				default: error.message = '连接出错';
// 			}
// 		}else{
// 			error.message ='连接服务器失败!'
// 		}
// 		return Promise.reject(error)
// 	}
// )

export default instance 