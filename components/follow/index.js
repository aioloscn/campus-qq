Component({

    properties: {

    },

    data: {
        followed: false
    },

    methods: {
        onFollow(event) {
            this.setData({
                followed: true
            })
        },

        cancelFollow(event) {
            this.setData({
                followed: false
            })
            this.triggerEvent('cancelFollow', {}, {})
        }
    }
})