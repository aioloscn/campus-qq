<view class="container">
    <view class="none-comment" wx:if="{{!haveComments}}">
        <text>暂无评论</text>
    </view>
    <view class="have-comment" wx:if="{{haveComments}}">
        <view class="head-container">
            <image class="head-portrait" src="{{comment.headPortrait}}" />
            <view>
                <view class="message-top">
                    <text class="nickname">{{comment.nickname}}</text>
                </view>
                <view class="datetime">
                    <text>{{comment.dateInterval}}</text>
                </view>
            </view>
        </view>
        <view class="like-container">
            <c-thumbs-up thumbsUpNum="{{comment.thumbsUpNum}}" praised="{{comment.praised}}" />
            <c-comment commentNum="{{comment.commentNum}}" />
        </view>
    </view>
    <text class="content">{{comment.content}}</text>
</view>