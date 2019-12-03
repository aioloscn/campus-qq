import {
    HTTP
} from "../utils/http.js"
import {
    config
} from "../config.js"
const regeneratorRuntime = require('../utils/runtime.js')

class ActivityModel extends HTTP {

    submitActivityContent(fromUid, nickname, headPortrait, title, content, topicId, province, city, county) {
        return this.cRequest({
            url: 'activity/release/content',
            data: {
                fromUid: fromUid,
                nickname: nickname,
                headPortrait: headPortrait,
                title: title,
                content: content,
                topicId: topicId,
                province: province,
                city: city,
                county: county
            },
            method: 'POST'
        })
    }

    async releaseActivityImages(activityId, images, length, count, successCount, failCount) {
        for (let i = 0; i < length; i++) {
            const suffix = images[count].substring(images[count].lastIndexOf('.'))
            console.log("suffix: " + suffix)
            if (suffix == '.gif') {
                return 500;
            }
            let content = await wx.getFileSystemManager().readFileSync(images[count], 'base64');
            let dataPrix = 'data:image/png;base64,'
            if (suffix) {
                if (suffix == '.jpeg' || suffix == '.jpg') {
                    dataPrix = 'data:image/jpeg;base64,'
                } else if (suffix == '.ico') {
                    dataPrix = 'data:image/x-icon;base64,'
                } else if (suffix == '.gif') {
                    dataPrix = 'data:image/gif;base64,'
                }
                content = dataPrix + content
            }
            console.log(content)
            const res = await this.uploadImage(activityId, content);
            if (res && res.code === 200) {
                successCount++
            } else {
                failCount++
            }
            console.log("res.code: " + res.code + " failCount: " + failCount)
        }
        return failCount
    }

    uploadImage(activityId, image) {
        return this.cRequest({
            url: 'activity/release/image',
            data: {
                activityId: activityId,
                image: image
            },
            method: 'POST',
            isParam: true
        })
    }

    deleteActivity(activityId) {
        return this.cRequest({
            url: 'activity/delete/' + activityId,
            method: 'DELETE',
            isParam: true
        })
    }

    getActivity(pageIndex, topicId, userId) {
        return this.cRequest({
            url: `activity/get?topicId=${topicId}&userId=${userId}&pageIndex=${pageIndex}`,
            isParam: true
        })
    }

    thumbsUp(activityId, fromUid) {
        return this.cRequest({
            url: 'activity/thumbsUp',
            data: {
                activityId: activityId,
                fromUid: fromUid
            },
            method: 'POST'
        })
    }

    cancelThumbsUp(activityId, fromUid) {
        return this.cRequest({
            url: 'activity/thumbsUp/cancel',
            data: {
                activityId: activityId,
                fromUid: fromUid
            },
            method: 'DELETE'
        })
    }
}

export {ActivityModel}