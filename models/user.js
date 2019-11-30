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

    /**
     * 关注用户
     * @param followUid 被关注者ID
     * @param concernUid 关注者ID
     */
    follow(followUid, concernUid) {
        return this.cRequest({
            url: 'user/follow',
            data: {
                followUid: followUid,
                concernUid: concernUid
            },
            method: 'POST'
        })
    }

    cancelFollow(followUid, concernUid) {
        return this.cRequest({
            url: 'user/follow/cancel',
            data: {
                followUid: followUid,
                concernUid: concernUid
            },
            method: 'DELETE'
        })
    }
}

export {UserModel}