import {
    InformationModel
} from "../../models/imformation.js"
import {
    getUserGlobalInfo,
    setGlobalInfo
} from "../../utils/common"

const regeneratorRuntime = require('../../utils/runtime.js')
const informationModel = new InformationModel()

Component({

    properties: {
        thumbsUpNum: Number,    // 接收到父页面传过来的值并赋值到data上
        commentNum: Number,
        forwardNum: Number,
        informationId: Number,
        praised: Boolean,
        item: Object
    },

    data: {
        praised: false,
        thumbsUpNum: 0,
        item: null
    },

    methods: {
        async onPraise(event) {
            const userInfo = getUserGlobalInfo()
            if (this.data.currentUserId == -1 || !userInfo) {
                wx.lin.showToast({
                    title: '请先登录~',
                    icon: 'error',
                    duration: 2000
                })
            } else {
                const res = await informationModel.thumbsUp(this.data.informationId, userInfo.id)
                if (res && res.code == 200) {
                    this.setData({
                        praised: true,
                        thumbsUpNum: this.data.thumbsUpNum + 1
                    })
                } else {
                    wx.showToast({
                        title: res.msg,
                        icon: 'error',
                        duration: 2500
                    })
                }
            }
        },

        async cancelPraised(event) {
            const userInfo = getUserGlobalInfo()
            if (this.data.currentUserId == -1 || !userInfo) {
                wx.lin.showToast({
                    title: '请先登录~',
                    icon: 'error',
                    duration: 2000
                });
            } else {
                const res = await informationModel.cancelThumbsUp(this.data.informationId, userInfo.id)
                if (res && res.code == 200) {
                    this.setData({
                        praised: false,
                        thumbsUpNum: this.data.thumbsUpNum - 1
                    });
                } else {
                    wx.showToast({
                        title: res.msg,
                        icon: 'error',
                        duration: 2500
                    })
                }
            }
        },

        entryContent() {
            const item = this.data.item
            setGlobalInfo('information-detail', item, 1000 * 3600)
            wx.navigateTo({
                url: '/pages/information-detail/information-detail'
            })
        }
    }
})