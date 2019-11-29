<view class="container ball-class">
    <button bindtap="onTap" catchtouchmove="buttonMove" bindtouchstart="buttonStart" bindtouchend="buttonEnd" windowWidth="{{windowWidth}}" windowHeight="{{windowHeight}}" style="top:{{buttonTop}}px;left:{{buttonLeft}}px;display: {{isHidden?'none':'flex'}}">
        <slot name="img"></slot>
    </button>
</view>