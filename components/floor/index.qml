<view class="container">
    <view bind:tap="onPraise" wx:if="{{!praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/thumbs-up.png" />
        <text>{{praisedNums}}</text>
    </view>
    <view bind:tap="cancelPraised" wx:if="{{praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/praised.png" />
        <text>{{praisedNums}}</text>
    </view>
    <view class="comment">
        <image class="comment-img" src="/images/icon/comment.png" />
        <text>{{commentNums}}</text>
    </view>
    <view class="forward">
        <image class="forward-img" src="/images/icon/forward.png" />
        <text>{{forwardNums}}</text>
    </view>
</view>