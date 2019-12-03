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
            setGlobalInfo('activity-detail', item, 1000 * 3600)
            wx.navigateTo({
                url: '/pages/activity-detail/activity-detail'
            })
        }
    }
})