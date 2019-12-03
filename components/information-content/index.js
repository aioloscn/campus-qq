import {setGlobalInfo} from "../../utils/common";

Component({

    properties: {
        item: Object
    },

    data: {

    },

    methods: {
        entryContent() {
            const item = this.data.item
            setGlobalInfo('information-detail', item, 1000 * 3600)
            wx.navigateTo({
                url: '/pages/information-detail/information-detail'
            })
        }
    }
})