Component({

    properties: {

    },

    data: {

    },

    methods: {
        onSearching(event) {
            this.triggerEvent('onSearching', {}, {})
        }
    }
})