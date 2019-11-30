Component({

    properties: {
        thumbsUpNum: Number
    },

    data: {
        praised: false,
        num: 0
    },

    methods: {
        onPraise(event) {
            const num = this.properties.thumbsUpNum + 1
            this.setData({
                praised: true,
                num
            })
        },
        cancelPraised(event) {
            const num = this.properties.thumbsUpNum - 1
            this.setData({
                praised: false,
                num
            })
        }
    }
})