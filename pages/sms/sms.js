import {
    UserModel
} from "../../models/user.js"
import {
    setUserGlobalInfo,
    getGlobalInfo
} from "../../utils/common.js"

const regeneratorRuntime = require('../../utils/runtime.js')
const userModel = new UserModel()

Page({

    data: {
        registered: false,
        phone: '',
        phoneNumber: '',
        isFocus: false,
        dataSource: [{
            initValue: ''
        }, {
            initValue: ''
        }, {
            initValue: ''
        }, {
            initValue: ''
        }, {
            initValue: ''
        }, {
            initValue: ''
        }],
        second: 60,
        loading: false,
        resend: false,
        password: '',
        confirmPassword: '',
        disabled1: true,
        disabled2: true,
        registering: false
    },

    onTapFocus(event) {
        this.setData({
            isFocus: true
        })
    },

    onInput(event) {
        let inputArr = event.detail.value.split('')
        const inputArrLength = inputArr.length
        if (inputArrLength != this.data.dataSource.length) {
            for (let i = 0; i < this.data.dataSource.length - inputArrLength; i++) {
            }
            inputArr.push('');
        } else {
            // 如果已注册直接登录，否则跳转到注册页
            this.loginOrRegister(this.data.phone, event.detail.value)
        }

        for (let i = 0; i < this.data.dataSource.length; i++) {
            const initValue = 'dataSource[' + i + '].initValue';
            this.setData({
                [initValue]: inputArr[i]
            });
        }
    },

    async resend(event) {
        this.setData({
            loading: true
        })
        const res = await userModel.sendSms(this.data.phone)
        this.setData({
            loading: false
        })
        if (res.code == 200) {
            this._showMessage('success', res.msg)
            this.setData({
                resend: true,
                second: 10
            })
            const _this = this;
            this.countDown(_this)
        } else {
            this._showMessage('error', res.msg)
        }
    },

    countDown(_this) {
        let second = _this.data.second
        if (second !== 0) {
            setTimeout(function () {
                _this.setData({
                    second: second - 1
                })
                _this.countDown(_this)
            }, 1000);
        } else {
            _this.setData({
                resend: false
            })
        }
    },

    async loginOrRegister(phone, code) {
        wx.showLoading({
            mask: true
        })
        const res = await userModel.loginOrRegister(phone, code)
        if (res.code === 200) {
            if (res.data) {
                setUserGlobalInfo(res.data, 1000 * 3600 * 24 * 7);
                wx.switchTab({
                    url: '/pages/user/user'
                })
            } else {
                wx.lin.showToast({
                    title: '第一次注册，请输入密码完成创建',
                    duration: 2500
                })
                this.setData({
                    registered: true
                })
            }
        } else {
            this._showMessage('error', res.msg)
        }
        wx.hideLoading();
    },

    inputPwd(event) {
        this.setData({
            disabled1: false,
            password: event.detail.value
        })
    },

    inputConfirmPwd(event) {
        this.setData({
            disabled2: false,
            confirmPassword: event.detail.value
        })
    },

    deletePwd(event) {
        this.setData({
            disabled1: true,
            password: ''
        })
    },

    deleteConfirmPwd(event) {
        this.setData({
            disabled2: true,
            confirmPassword: ''
        })
    },

    async onRegister(event) {
        this.setData({
            registering: true
        })
        const password = this.data.password.trim()
        const confirmPassword = this.data.confirmPassword.trim()

        if (password.length < 6 || confirmPassword.length < 6) {
            this._showMessage('error', '密码最小长度6位');
        } else if (password !== confirmPassword) {
            this._showMessage('error', '两次密码不一样')
        } else {
            const nickname = getGlobalInfo('nickname')
            const headPortrait = getGlobalInfo('headPortrait')
            const res = await userModel.register(nickname, headPortrait, this.data.phone, password)
            if (res) {
                if (res.code === 200) {
                    setUserGlobalInfo(res.data, 1000 * 3600 * 24 * 7)
                    wx.switchTab({
                        url: '/pages/user/user'
                    })
                } else {
                    this._showMessage('error', res.msg)
                }
            } else {
                this._showMessage('error', '注册期间发生异常')
            }
        }
        this.setData({
            registering: false
        })
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
        const phone = options.phone
        if (phone) {
            this.setData({
                phone,
                phoneNumber: phone.substring(phone.length - 4)
            })
        }
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