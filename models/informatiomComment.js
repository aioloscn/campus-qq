import {
    HTTP
} from "../utils/http.js"

class InformationComment extends HTTP {

    release(informationId, content, fromUid) {
        return this.cRequest({
            url: 'information/comment/release',
            data: {
                informationId: informationId,
                content: content,
                fromUid: fromUid
            },
            method: 'POST'
        })
    }

    getComments(informationId, userId, pageIndex) {
        return this.cRequest({
            url: `information/comment/get?id=${informationId}&user=${userId}&pageIndex=${pageIndex}`,
            isParam: true
        })
    }
}

export {InformationComment}