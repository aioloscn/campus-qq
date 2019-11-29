import {
  cPromise,
  setGlobalInfo,
  setUserGlobalInfo,
  getUserGlobalInfo,
  removeUserGlobalInfo
} from "../../utils/common.js"
import {
  UserModel
} from "../../models/user.js"

const regeneratorRuntime = require("../../utils/runtime.js")
const userModel = new UserModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    loggedIn: false
  },

  onTap(event) {
    wx.navigateTo({
      url: '/pages/phone/phone'
    })
  },

  /**
   * 获取授权信息
   * @param event
   */
  getUserInfo(event) {
    const userInfo = event.detail.userInfo
    if (userInfo) {
      setGlobalInfo('nickname', userInfo.nickName)
      setGlobalInfo('headPortrait', userInfo.avatarUrl)
      // 跳转到登录注册页面
      wx.navigateTo({
        url: '/pages/phone/phone'
      })
    }
  },

  /**
   * 检查用户是否已经授权
   * @returns {Promise<void>}
   */
  async userAuthorized() {
    const loginRes = await userModel.login()
    console.log(loginRes)
    const data = await cPromise(wx.getSetting)()
    if (data.authSetting['scope.userInfo']) {
      const res = await cPromise(wx.getUserInfo)()
      if (!res) return
      const userInfo = res.userInfo
      this.setData({
        authorized: true,
        userInfo
      })
    }
  },

  onSetting(event) {
    removeUserGlobalInfo()
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
    // 如果有缓存读取缓存数据，隐藏授权按钮
    const cacheUserInfo = getUserGlobalInfo()
    if (cacheUserInfo) {
      this.setData({
        userInfo: cacheUserInfo,
        authorized: true
      })
    }
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