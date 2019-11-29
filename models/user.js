import {
    HTTP
} from "../utils/http.js"

class UserModel extends HTTP {

    sendSms(telphone) {
        return this.cRequest({
            url: 'user/sendsms',
            data: {
                telphone: telphone
            },
            method: 'POST',
            isParam: true
        })
    }

    loginOrRegister(telphone, code) {
        return this.cRequest({
            url: 'user/loginOrRegister',
            data: {
                telphone: telphone,
                code: code
            },
            method: 'POST',
            isParam: true
        })
    }

    register(nickname, headPortrait, telphone, password) {
        return this.cRequest({
            url: 'user/register',
            data: {
                nickname: nickname,
                headPortrait: headPortrait,
                telphone: telphone,
                password: password
            },
            method: 'POST'
        })
    }

    login(telphone, password) {
        return this.cRequest({
            url: 'user/login',
            data: {
                telphone: telphone,
                password: password
            },
            method: 'POST'
        })
    }
}

export {UserModel}