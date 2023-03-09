import request from "./request"

//发送验证码
export const SendEmailCodeApi = (data)=>request.post("/user/send_code",data)
//注册接口
export const RegisterApi = (data)=>request.post("/user/register",data)
// Rsa公钥获取
export const RsakeyApi = () =>request.get("/public/key")
//登录接口
export const LoginApi = (data)=>request.post("/user/login",data)
