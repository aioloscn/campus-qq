var startPoint;
Component({

    options: {
        multipleSlots: true
    },

    externalClasses: ['ball-class'],

    properties: {
        buttonTop: Number,
        buttonLeft: Number,
        windowWidth: String,
        windowHeight: String,
        isHidden: Boolean
    },

    data: {
        buttonTop: 0,
        buttonLeft: 0,
        windowHeight: '',
        windowWidth: ''
    },

    methods: {
        onTap(event) {
            this.triggerEvent('tapReleaseBtn', {}, {})
        },
        buttonStart: function (e) {
            startPoint = e.touches[0]
        },
        buttonMove: function (e) {
            let endPoint = e.touches[e.touches.length - 1]
            let translateX = endPoint.clientX - startPoint.clientX
            let translateY = endPoint.clientY - startPoint.clientY
            startPoint = endPoint
            let buttonTop = this.data.buttonTop + translateY
            let buttonLeft = this.data.buttonLeft + translateX
            //判断是移动否超出屏幕
            if (buttonLeft+50 >= this.data.windowWidth){
                buttonLeft = this.data.windowWidth-50;
            }
            if (buttonLeft<=0){
                buttonLeft=0;
            }
            if (buttonTop<=0){
                buttonTop=0
            }
            if (buttonTop + 50 >= this.data.windowHeight){
                buttonTop = this.data.windowHeight-50;
            }
            this.setData({
                buttonTop: buttonTop,
                buttonLeft: buttonLeft
            })
        },
        buttonEnd: function (e) {

        }
    }
})