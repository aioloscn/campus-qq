<view class="container">
    <view bind:tap="onPraise" wx:if="{{!praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/thumbs-up.png" />
        <text>赞</text>
    </view>
    <view bind:tap="cancelPraised" wx:if="{{praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/praised.png" />
        <text>已赞</text>
    </view>
    <view class="comment">
        <image class="comment-img" src="/images/icon/comment.png" />
        <text>{{commentNums}}</text>
    </view>
    <view class="share">
        <image class="share-img" src="/images/icon/share.png" />
    </view>
</view>