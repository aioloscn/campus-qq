import {
    HTTP
} from "../utils/http.js"

class ActivityComment extends HTTP {

    release(activityId, content, fromUid) {
        return this.cRequest({
            url: 'activity/comment/release',
            data: {
                activityId: activityId,
                content: content,
                fromUid: fromUid
            },
            method: 'POST'
        })
    }

    getComments(activityId, userId, pageIndex) {
        return this.cRequest({
            url: `activity/comment/get?id=${activityId}&user=${userId}&pageIndex=${pageIndex}`,
            isParam: true
        })
    }
}

export {ActivityComment}