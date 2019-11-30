import {
    UserModel
} from "../../models/user.js"
import {
    getUserGlobalInfo,
    setUserGlobalInfo
} from "../../utils/common.js"

const regeneratorRuntime = require('../../utils/runtime.js')
const userModel = new UserModel()

Component({

    properties: {
        currentUserId: Number,
        followed: Boolean,
        fromUid: Number
    },

    data: {
        followed: false
    },

    methods: {
        async onFollow(event) {
            const userInfo = getUserGlobalInfo()
            if (this.data.currentUserId == -1 || !userInfo) {
                wx.lin.showToast({
                    title: '请先登录~',
                    icon: 'error',
                    duration: 2000
                })
            } else {
                const res = await userModel.follow(this.data.fromUid, userInfo.id)
                if (res && res.code == 200) {
                    const userInfo = getUserGlobalInfo()
                    userInfo.follows += 1
                    setUserGlobalInfo(userInfo)
                    this.setData({
                        followed: true
                    });
                } else {
                    if (res.code == 20010) {
                        this.setData({
                            followed: true
                        })
                    } else {
                        wx.lin.showToast({
                            title: res.msg,
                            icon: 'error',
                            duration: 2500
                        })
                    }
                }
            }
        },

        async cancelFollow(event) {
            const userInfo = getUserGlobalInfo()
            if (this.data.currentUserId == -1 || !userInfo) {
                wx.lin.showToast({
                    title: '请先登录~',
                    icon: 'error',
                    duration: 2000
                });
            } else {
                const res = await userModel.cancelFollow(this.data.fromUid, userInfo.id)
                if (res && res.code == 200) {
                    const userInfo = getUserGlobalInfo()
                    userInfo.follows -= 1
                    setUserGlobalInfo(userInfo)
                    wx.showToast({
                        title: '取消关注',
                        icon: 'success',
                        duration: 2000
                    })
                    this.setData({
                        followed: false
                    })
                } else {
                    if (res.code == 20011) {
                        this.setData({
                            followed: false
                        })
                    } else {
                        wx.lin.showToast({
                            title: res.msg,
                            icon: 'error',
                            duration: 2500
                        })
                    }
                }
            }
        }
    }
})