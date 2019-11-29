<view bind:tap="onFollow" wx:if="{{!followed}}" class="container">
    <image class="add-icon" src="/images/icon/add2.png" />
    <text>关注</text>
</view>

<view bind:tap="cancelFollow" wx:if="{{followed}}" class="followed-container">
    <text>已关注</text>
</view>