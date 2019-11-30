<view class="container">
    <view bind:tap="onPraise" wx:if="{{!praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/thumbs-up.png" />
        <text>{{thumbsUpNum}}</text>
    </view>
    <view bind:tap="cancelPraised" wx:if="{{praised}}" class="thumbs-up">
        <image class="thumbs-up-img" src="/images/icon/praised.png" />
        <text>{{thumbsUpNum}}</text>
    </view>
    <view class="comment" item="{{item}}" bind:tap="entryContent">
        <image class="comment-img" src="/images/icon/comment.png" />
        <text>{{commentNum}}</text>
    </view>
    <view class="forward">
        <l-button l-class="share-btn" special="{{true}}" open-type="share">
            <image class="share" src="/images/icon/forward.png" />
        </l-button>
        <text>{{forwardNum}}</text>
    </view>
</view>