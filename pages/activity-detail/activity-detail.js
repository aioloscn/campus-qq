import {
    getGlobalInfo,
    getUserGlobalInfo
} from "../../utils/common.js"
import {
    ActivityComment
} from "../../models/ActivityComment.js"

const regeneratorRuntime = require('../../utils/runtime.js')
const activityComment = new ActivityComment()

Page({

    data: {
        item: null,
        currentUserId: Number,
        posting: false,
        comments: {},
        haveComments: false,
        pages: 1,
        pageIndex: 0
    },

    async release(event) {
        const userInfo = getUserGlobalInfo()
        if (userInfo) {
            const res = await activityComment.release(this.data.item.id, event.detail, userInfo.id)
            if (res && res.code == 200) {
                this._showToast(res.msg, 'success')
                this.getComments()
            } else {
                this._showToast(res.msg, 'error')
            }
        } else {
            this._showToast('请先登录~', 'error')
        }
    },

    hideBoard() {
        this.setData({
            posting: true
        })
        this.setData({
            posting: false
        })
    },

    async getComments() {
        const userInfo = getUserGlobalInfo()
        const res = await activityComment.getComments(this.data.item.id, userInfo ? userInfo.id : null, this.data.pageIndex)
        console.log(res.data.length)
        if (res && res.code == 200 && res.data.length > 0) {
            this.setData({
                haveComments: true,
                comments: res.data
            })
        } else {
            this.setData({
                haveComments: false
            })
        }
    },

    _showToast(title, icon) {
        wx.lin.showToast({
            title: title,
            icon: icon,
            duration: 2000
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const item = getGlobalInfo('activity-detail')
        console.log(item)
        if (item) {
            this.setData({
                item
            })
        }
        const userInfo = getUserGlobalInfo()
        if (userInfo) {
            this.setData({
                currentUserId: userInfo.id
            })
        }

        this.getComments()
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