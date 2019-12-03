

Component({

    properties: {
        information: Array,
        pages: Number,
        loading: Boolean,
        currentUserId: Number
    },

    /**
     * 页面的初始数据
     */
    data: {
        information: {},
        pages: 1,
        pageIndex: 0
    },

    methods: {
        previewImg(e) {
            console.log(e)
            let index = e.currentTarget.dataset.index
        }
    }
})