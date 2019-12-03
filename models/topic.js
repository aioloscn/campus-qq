import {
    HTTP
} from "../utils/http.js"

class TopicModel extends HTTP {

    getTopics() {
        return this.cRequest({
            url: 'topic/get'
        })
    }

    getActivityTopics() {
        return this.cRequest({
            url: 'activity/topic/get'
        })
    }
}

export {TopicModel}