import {
    TopicModel
} from "../../models/topic.js"
const regeneratorRuntime = require('../../utils/runtime.js')
import {
    InformationModel
} from "../../models/imformation.js"
import {
    getUserGlobalInfo
} from "../../utils/common.js"

const topicModel = new TopicModel()
const informationModel = new InformationModel()

Page({

    data: {
        textareaValue: '',
        topics: null,
        topicName: '',
        selected: false,
        selectedTopicId: 0,
        selectedTopicName: '',
        isActivity: false,
        openCityPicker: false,
        province: '',
        city: '',
        county: '',
        imgUrls: []
    },

    async getTopics() {
        const res = await topicModel.getTopics()
        if (res && res.code === 200) {
            this.setData({
                topics: res.data
            })
        }
    },

    // 跳转到话题列表页面
    selectTopic() {

    },

    // 选择话题
    onTap(event) {
        const topic = event.detail.cell
        this.setData({
            selected: true,
            selectedTopicId: topic.id,
            selectedTopicName: topic.topicName
        })
        if (topic && topic.type === 1) {
            this.setData({
                isActivity: true,
                openCityPicker: true,
                province: '北京市',
                city: '北京城区',
                county: '朝阳区'
            })
        } else {
            this.setData({
                isActivity: false,
                openCityPicker: false,
                province: '',
                city: '',
                county: ''
            })
        }
    },

    inputTextarea(event) {
        this.data.textareaValue = event.detail.value.trim()
    },

    onSubmit(event) {
        this.onConfirm()
    },

    // 点击键盘上的完成事件
    async onConfirm() {
        wx.showLoading({
            mask: true
        })
        const content = this.data.textareaValue
        const topicId = this.data.selectedTopicId
        const images = this.data.imgUrls
        const province = this.data.province
        const city = this.data.city
        const county = this.data.county
        console.log(content)
        console.log(images)
        if (content.length > 0 || images.length > 0) {
            const user = getUserGlobalInfo()
            if (user && user.id && user.nickname && user.headPortrait) {
                const res = await informationModel.submitInformationContent(user.id, user.nickname, user.headPortrait, content, topicId, province, city, county);
                if (images != []) {
                    if (res && res.code === 200 && res.data) {
                        console.log(images.length)
                        const failCount = await informationModel.releaseInformationImages(res.data, images, images.length, 0, 0, 0);
                        if (failCount > 0) {
                            wx.showToast({
                                title: failCount + '张图片上传失败',
                                icon: 'error',
                                duration: 2500
                            })
                        } else {
                            wx.showToast({
                                title: '已发布',
                                icon: 'success',
                                duration: 2000,
                                success(res) {
                                    setTimeout(function () {
                                        wx.navigateBack({
                                            delta: 2
                                        })
                                    }, 2000)
                                }
                            })
                        }
                    } else {
                        wx.showToast({
                            'title': res.msg,
                            icon: 'error',
                            duration: 2500
                        })
                    }
                } else {
                    if (res && res.code === 200) {
                        wx.showToast({
                            'title': res.msg,
                            'icon': 'success',
                            duration: 2000,
                            success(res) {
                                setTimeout(function () {
                                    wx.navigateBack({
                                        delta: 2
                                    })
                                }, 2000)
                            }
                        })
                    } else {
                        wx.showToast({
                            'title': re.msg,
                            icon: 'error',
                            duration: 2500
                        })
                    }
                }
            } else {
                wx.showToast({
                    'title': '登录信息已失效，请重新登录',
                    icon: 'error',
                    duration: 2500
                })
            }
        }
    },

    selectCity: function(e){
        // 打印出来效果{province: "广西壮族自治区", city: "北海市", county: "合浦县"}
        this.setData({
            province: e.detail.province,
            city: e.detail.city,
            county: e.detail.county
        })
    },

    pickImage(event) {
        if (event.detail.all.length > 0) {
            for (let i = 0; i < event.detail.all.length; i++){
                this.data.imgUrls[i] = event.detail.all[i].url
            }
        }
    },

    removeImage(event) {
        if (event.detail.all.length > 0) {
            for (let i = 0; i < event.detail.all.length; i++) {
                this.data.imgUrls[i] = event.detail.all[i].url
            }
        } else {
            this.data.imgUrls = []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getTopics()
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