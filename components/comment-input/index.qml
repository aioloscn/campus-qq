<view class="container">
    <view class="post-container" wx:if="{{!posting}}">
        <view bind:tap="onFakePost" class="post-fake">
            <text>输入评论...</text>
        </view>
        <view class="like-container">
            <c-thumbs-up thumbsUpNum="{{thumbsUpNum}}" praised="{{praised}}" />
            <c-comment commentNum="{{commentNum}}" />
        </view>
    </view>
    <view class="posting-container" wx:if="{{posting}}">
        <textarea focus="{{posting}}" bindinput="changeInput" class="post" placeholder="输入评论..."></textarea>
        <text bind:tap="release">发布</text>
    </view>
</view>