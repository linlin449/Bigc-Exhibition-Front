/**
 * 登陆模块
 */
export namespace Login {
    export interface ReqLoginForm {
        // * 用户名
        username: string;
        // * 密码
        password: string;
        // * 验证码
        vercode?: string;
        // * 验证码key
        verkey?: string;
    }
}