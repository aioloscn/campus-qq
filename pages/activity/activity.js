import {
  getUserGlobalInfo,
  setGlobalInfo
} from "../../utils/common"
import {
  ActivityModel
} from "../../models/activity.js"

const regeneratorRuntime = require('../../utils/runtime.js')
const activityModel = new ActivityModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: 1,
    pageIndex: 0,
    searching: false,
    buttonTop: 0,
    buttonLeft: 0,
    windowWidth: '',
    windowHeight: '',
    isHidden: false,
    scrollTop: 50,
    activity: {}
  },

  tapReleaseBtn(event) {
    wx.navigateTo({
      url: '/pages/activity-release/activity-release'
    })
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

  onSearching(event) {
    this.setData({
      searching: true
    })
  },

  onCancel(event) {
    this.setData({
      searching: false
    })
  },

  async getActivity() {
    let userId = 0
    const userInfo = getUserGlobalInfo()
    if (userInfo)
      userId = userInfo.id
    const res = await activityModel.getActivity(this.data.pageIndex, 0, userId)
    if (res && res.code === 200 && res.data) {
      this.setData({
        activity: res.data.obj,
        pages: res.data.pages
      })
    }
    console.log(this.data.activity)
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
    this.getActivity()
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
    this.getActivity()
    wx.stopPullDownRefresh()
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