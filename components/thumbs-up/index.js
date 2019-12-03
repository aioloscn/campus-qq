Component({

    properties: {
        thumbsUpNum: Number,
        praised: Boolean
    },

    data: {
        praised: false,
        thumbsUpNum: 0
    },

    methods: {
        onPraise(event) {
            const thumbsUpNum = this.properties.thumbsUpNum + 1
            this.setData({
                praised: true,
                thumbsUpNum
            })
            this.triggerEvent('onPraise', this.data.thumbsUpNum)
        },
        cancelPraised(event) {
            const thumbsUpNum = this.properties.thumbsUpNum - 1
            this.setData({
                praised: false,
                thumbsUpNum
            })
            this.triggerEvent('cancelPraised', this.data.thumbsUpNum)
        }
    }
})