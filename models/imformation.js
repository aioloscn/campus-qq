import {
    HTTP
} from "../utils/http.js"
import {
    config
} from "../config.js"
const regeneratorRuntime = require('../utils/runtime.js')

class InformationModel extends HTTP {

    submitInformationContent(fromUid, nickname, headPortrait, content, topicId, province, city, county) {
        return this.cRequest({
            url: 'information/release/content',
            data: {
                fromUid: fromUid,
                nickname: nickname,
                headPortrait: headPortrait,
                content: content,
                topicId: topicId,
                province: province,
                city: city,
                county: county
            },
            method: 'POST'
        })
    }

    async releaseInformationImages(informationId, images, length, count, successCount, failCount) {
        for (let i = 0; i < length; i++) {
            const suffix = images[count].substring(images[count].lastIndexOf('.'))
            console.log("suffix: " + suffix)
            let content = await wx.getFileSystemManager().readFileSync(images[count], 'base64')
            let dataPrix = 'data:image/png;base64,'
            if (suffix) {
                if (suffix == 'jpeg' || suffix == 'jpg') {
                    dataPrix = 'data:image/jpeg;base64,'
                } else if (suffix == 'ico' || suffix == 'ico') {
                    dataPrix = 'data:image/x-icon;base64,'
                } else if (suffix == 'gif') {
                    dataPrix = 'data:image/gif;base64,'
                }
                content = dataPrix + content
            }
            const res = await this.uploadImage(informationId, content);
            if (res && res.code === 200) {
                successCount++
            } else {
                failCount++
            }
            console.log("res.code: " + res.code + " failCount: " + failCount)
        }
        return failCount
    }

    uploadImage(informationId, image) {
        return this.cRequest({
            url: 'information/release/image',
            data: {
                informationId: informationId,
                image: image
            },
            method: 'POST',
            isParam: true
        })
    }

    getInformation(pageIndex, topic=0) {
        return this.cRequest({
            url: `information/get?topic=${topic}&pageIndex=${pageIndex}`
        })
    }
}

export {InformationModel}