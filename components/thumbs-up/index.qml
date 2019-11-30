<view wx:if="{{!praised}}" bind:tap="onPraise" class="container">
    <image class="img" src="/images/icon/thumbs-up.png" />
    <text class="num">{{thumbsUpNum}}</text>
</view>
<view wx:if="{{praised}}" bind:tap="cancelPraised" class="container">
    <image class="img" src="/images/icon/praised.png" />
    <text class="num">{{num}}</text>
</view>