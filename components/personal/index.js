Component({

    properties: {
        url: String,
        nickname: String,
        datetime: String
    },

    data: {

    },

    methods: {
        cancelFollow(event) {
            this.triggerEvent('cancelFollow', {}, {})
        },
    }
})