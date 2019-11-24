import {
    UserModel
} from '../../models/user'
const regeneratorRuntime = require("../../utils/runtime.js")

const userModel = new UserModel()
Page({

    data: {
        disabled: true,
        loading: false,
        phoneNumber: ''
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

        const reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
        if (!this.data.phoneNumber || this.data.phoneNumber.length != 11) {
            this.setData({
                loading: false
            })
            wx.lin.showMessage({
                type: 'error',
                content: '请输入11位手机号码',
                duration: 2500
            })
            return
        } else if (!reg.test(this.data.phoneNumber)) {
            this.setData({
                loading: false
            })
            wx.lin.showMessage({
                content: '请输入有效的手机号码',
                type: 'error',
                duration: 2500
            })
            return
        }

        const res = await userModel.sendSms(this.data.phoneNumber)

        if (res.code == 200) {
            wx.navigateTo({
                url: '/pages/sms/sms?phone=' + this.data.phoneNumber
            });
        } else {
            wx.lin.showMessage({
                type: 'error',
                content: res.msg,
                duration: 2500
            })
        }
    },

    switchAccountLogin(event) {
        console.log(555)
    },

    onDelete(event) {
        this.setData({
            phoneNumber: '',
            disabled: true
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
            loading: false
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