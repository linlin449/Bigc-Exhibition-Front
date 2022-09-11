import service from '@/api'

export const getCaptcha = () => {
    service.get("/captcha/get");
}