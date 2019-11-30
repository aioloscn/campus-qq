import {
  InformationModel
} from "../../models/imformation.js"
import {
  getUserGlobalInfo
} from "../../utils/common.js"

const regeneratorRuntime = require('../../utils/runtime.js')
const informationModel = new InformationModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: {},
    pages: 0,
    currentUserId: -1,
    pageIndex: 0,
    buttonTop: 0,
    buttonLeft: 0,
    windowWidth: '',
    windowHeight: '',
    isHidden: false,
    scrollTop: 50
  },

  tapReleaseBtn(event) {
    wx.navigateTo({
      url: '/pages/release/release'
    })
  },

  async getInformation() {
    let userId = 0
    const userInfo = getUserGlobalInfo()
    if (userInfo)
      userId = userInfo.id
    const res = await informationModel.getInformation(this.data.pageIndex, 0, userId)
    if (res && res.code === 200 && res.data) {
      this.setData({
        information: res.data.obj,
        pages: res.data.pages
      })
      // 如果已登录传当前用户ID到follow组件中动态控制显示
      // 如果没登录，当用户点击关注时提示登录
      const userInfo = getUserGlobalInfo()
      if (userInfo) {
        this.setData({
          currentUserId: userInfo.id
        })
      }
    }
    console.log(this.data.information)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this =this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 高度,宽度 单位为px
        _this.setData({
          // 减去悬浮球的宽高
          buttonTop: res.windowHeight - 100,
          buttonLeft: res.windowWidth - 50,
          windowHeight:  res.windowHeight,
          windowWidth:  res.windowWidth
        })
      }
    })

    this.getInformation()
  },

  onPageScroll: function (e) {
    let _this = this;
    if (e.scrollTop <= 50) {
      e.scrollTop = 50
    } else if (e.scrollTop > wx.getSystemInfoSync().windowHeight) {
      e.scrollTop = wx.getSystemInfoSync().windowHeight
    }

    if (e.scrollTop > this.data.scrollTop || e.scrollTop == wx.getSystemInfoSync().windowHeight) {
      this.setData({
        isHidden: true,
        scrollTop: e.scrollTop
      });
    } else {
      this.setData({
        isHidden: false,
        scrollTop: e.scrollTop
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