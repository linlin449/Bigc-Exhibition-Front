import service from '@/api'
import { Login } from '@/api/interface';
/**
 * 用户登陆
 */
export const loginApi = (params: Login.ReqLoginForm) => {
    return service.post<Login.ReqLoginForm>('/admin/login', params);
};