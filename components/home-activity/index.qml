<view class="container">
    <view class="recommend-container">
        <view class="personal-container">
            <c-personal url="{{url[0]}}" nickname="{{nickname[0]}}" datetime="{{datetime[0]}}" />
        </view>
        <view class="content">
            <text>{{content}}</text>
        </view>
        <view class="tag-container">
            <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">跑腿</l-tag>
            <view class="position-container">
                <image class="position-img" src="/images/icon/position.png" />
                <text class="position">成都市金堂县</text>
            </view>
        </view>
        <view class="floor">
            <c-floor commentNum="{{2}}" />
        </view>
    </view>
</view>