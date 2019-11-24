Component({

    properties: {
        praiseNums: Number
    },

    data: {
        praised: false,
        nums: 0
    },

    methods: {
        onPraise(event) {
            const nums = this.properties.praiseNums + 1
            this.setData({
                praised: true,
                nums
            })
        },
        cancelPraised(event) {
            const nums = this.properties.praiseNums - 1
            this.setData({
                praised: false,
                nums
            })
        }
    }
})