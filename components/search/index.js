Component({

    properties: {

    },

    data: {

    },

    methods: {
        onCancel(event) {
            this.triggerEvent('onCancel', {}, {})
        }
    }
})