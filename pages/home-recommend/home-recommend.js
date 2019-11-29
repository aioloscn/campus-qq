

Page({

    properties: {
        information: Array,
        pages: Number
    },

    /**
     * 页面的初始数据
     */
    data: {
        information: {},
        pages: 0,
        pageIndex: 0,
        url: ["/images/logo/campus-logo.png", "/images/user/campus-bg.png", "/images/user/campus-bg1.png"],
        nickname: ["囡囡", "热忱", "Aiolos"],
        datetime: ["20:35", "22:31", "00:50"]
    },

    cancelFollow(event) {
        wx.lin.showToast({
            title: '取消关注',
            icon: 'success'
        })
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(111)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log(222)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log(333)
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