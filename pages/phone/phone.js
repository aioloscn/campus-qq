import {
    UserModel
} from '../../models/user'
import {setUserGlobalInfo} from "../../utils/common";
const regeneratorRuntime = require("../../utils/runtime.js")

const userModel = new UserModel()
Page({

    data: {
        disabled: true,
        loading: false,
        phoneNumber: '',
        isAccountLoginIn: false,
        account: '',
        password: '',
        accountDisabled: true,
        passwordDisabled: true,
        loginDisabled: true,
        loggingIn: false
    },

    changeInput(event) {
        const phone = event.detail.value;
        if (phone && phone.length > 0) {
            this.setData({
                disabled: false,
                phoneNumber: phone
            })
        } else {
            this.setData({
                disabled: true,
                loading: false,
                phoneNumber: ''
            })
        }
    },

    async nextStep(event) {
        this.setData({
            loading: true
        })

        if (this._validate(this.data.phoneNumber)) {
            const res = await userModel.sendSms(this.data.phoneNumber);
            if (res) {
                if (res.code == 200) {
                    wx.navigateTo({
                        url: '/pages/sms/sms?phone=' + this.data.phoneNumber
                    });
                } else {
                    this._showMessage('error', res.msg)
                }
            } else {
                this._showMessage('error', '发送验证码失败')
            }
        }

        this.setData({
            loading: false
        })
    },

    switchAccountLogin(event) {
        this.setData({
            isAccountLoginIn: true
        })
    },

    switchCodeLogin(event) {
        this.setData({
            isAccountLoginIn: false
        })
    },

    onDelete(event) {
        this.setData({
            phoneNumber: '',
            disabled: true
        })
    },

    inputAccount(event) {
        const val = event.detail.value
        this.setData({
            accountDisabled: false,
            account: val
        })
        if (val === '') {
            this.setData({
                accountDisabled: true
            })
        }
    },

    inputPwd(event) {
        const val = event.detail.value
        this.setData({
            passwordDisabled: false,
            password: val
        })
        if (val === '') {
            this.setData({
                passwordDisabled: true
            })
        }
    },

    deleteAccount(event) {
        this.setData({
            accountDisabled: true,
            account: ''
        })
    },

    deletePwd(event) {
        this.setData({
            passwordDisabled: true,
            password: ''
        })
    },

    async signIn(event) {
        this.setData({
            loggingIn: true
        })
        const account = this.data.account
        const password = this.data.password
        if (!this._validate(account)) {
            this.setData({
                loggingIn: false
            })
            return
        }
        if (!password || password.length < 6) {
            this._showMessage('error', '密码长度不能小于6位');
        } else {
            const res = await userModel.login(account, password);
            if (res) {
                if (res.code == 200) {
                    setUserGlobalInfo(res.data, 1000 * 3600 * 24 * 7);
                    wx.switchTab({
                        url: '/pages/user/user'
                    })
                } else {
                    this._showMessage('error', res.msg)
                }
            } else {
                this._showMessage('error', '连接服务器失败')
            }
        }

        this.setData({
            loggingIn: false
        })
    },

    _validate(telphone) {
        const reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
        if (!telphone || telphone.length != 11) {
            this.setData({
                loading: false
            })
            this._showMessage('error', '请输入11位手机号码')
            return false
        } else if (!reg.test(telphone)) {
            this.setData({
                loading: false
            })
            this._showMessage('error', '请输入有效的手机号码')
            return false
        }
        return true
    },

    _showMessage(type, content) {
        wx.lin.showMessage({
            type,
            content,
            duration: 2500
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            disabled: true,
            loading: false,
            isAccountLoginIn: false,
            loginDisabled: true,
            loggingIn: false
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})