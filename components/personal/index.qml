<view class="container">
    <image class="head-portrait" src="{{url}}" />
    <view>
        <view class="message-top">
            <text class="nickname">{{nickname}}</text>
            <c-follow bind:cancelFollow="cancelFollow" />
        </view>
        <view class="datetime">
            <text>{{datetime}}</text>
        </view>
    </view>
</view>