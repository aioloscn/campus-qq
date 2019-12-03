Component({

    properties: {
        posting: Boolean,
        thumbsUpNum: Number,
        commentNum: Number,
        praised: Boolean,
        content: String
    },

    data: {
        posting: false,
        thumbsUpNum: 0,
        commentNum: 0,
        content: ''
    },

    methods: {
        onFakePost(event) {
            this.setData({
                posting: true
            })
        },

        changeInput(event) {
            this.setData({
                content: event.detail.value
            })
        },

        release(event) {
            this.setData({
                posting: false
            })
            this.triggerEvent('release', this.data.content, {})
        }
    }
})