<wxs src="../../utils/tool.wxs" module="tool" />

<view class="container">
    <view class="recommend-container" wx:key="{{index}}" wx:for="{{information}}">
        <text>{{item[index].fromUid}}</text>
        <view class="personal-container">
            <c-personal url="{{item.headPortrait}}" nickname="{{item.nickname}}" datetime="{{item.dateInterval}}"
                         oneself="{{tool.oneself(currentUserId, item.fromUid)}}" currentUserId="{{currentUserId}}"
            followed="{{item.followed}}" fromUid="{{item.fromUid}}" />
        </view>
        <view class="content">
            <c-information-content item="{{item}}" />
            <image mode="aspectFill" bindtap="previewImg" class="contentImage" data-index="{{idx}}" wx:for-index="idx"
                   wx:key="idx" wx:for="{{item.imageList}}" wx:for-item="val" src="{{val}}" />
        </view>
        <view class="tag-container" wx:if="{{!item.topicId==0}}">
            <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">{{item.topicName}}</l-tag>
            <view class="position-container" wx:if="{{!item.type==0}}">
                <image class="position-img" src="/images/icon/position.png" />
                <text class="position">{{item.province}}{{item.city}}{{item.county}}</text>
            </view>
        </view>
        <view class="floor">
            <c-floor thumbsUpNum="{{item.thumbsUpNum}}" commentNum="{{item.commentNum}}" forwardNum="{{0}}"
                     informationId="{{item.id}}" praised="{{item.praised}}" item="{{item}}" />
        </view>
    </view>
    <l-toast />
    <l-loading show="{{loading}}" type="change" color="#4983d0"></l-loading>
</view>