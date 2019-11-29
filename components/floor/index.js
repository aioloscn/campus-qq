Component({

    properties: {
        praisedNums: Number,
        commentNums: Number,
        forwardNums: Number
    },

    data: {
        praised: false
    },

    methods: {
        onPraise(event) {
            this.setData({
                praised: true
            })
        },

        cancelPraised(event) {
            this.setData({
                praised: false
            })
        }
    }
})