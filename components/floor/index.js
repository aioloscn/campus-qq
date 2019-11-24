Component({

    properties: {
        commentNums: Number
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