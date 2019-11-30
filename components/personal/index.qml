<view class="container">
    <image class="head-portrait" src="{{url}}" />
    <view>
        <view class="message-top">
            <text class="nickname">{{nickname}}</text>
            <c-follow wx:if="{{!oneself}}" followed="{{followed}}" fromUid="{{fromUid}}" currentUserId="{{currentUserId}}" />
        </view>
        <view class="datetime">
            <text>{{datetime}}</text>
        </view>
    </view>
</view>