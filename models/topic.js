import {
    HTTP
} from "../utils/http.js"

class TopicModel extends HTTP {

    getTopics() {
        return this.cRequest({
            url: 'topic/get'
        })
    }
}

export {TopicModel}