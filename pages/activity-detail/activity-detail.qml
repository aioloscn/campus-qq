<wxs src="../../utils/tool.wxs" module="tool" />

<view class="container">
    <view bind:tap="hideBoard" class="personal-container">
        <c-personal url="{{item.headPortrait}}" nickname="{{item.nickname}}" datetime="{{item.dateInterval}}"
                    oneself="{{tool.oneself(currentUserId, item.fromUid)}}" currentUserId="{{currentUserId}}"
                    followed="{{item.followed}}" fromUid="{{item.fromUid}}" />
    </view>
    <view bind:tap="hideBoard" class="content">
        <view class="title-container">
            <text class="title">{{item.title}}</text>
        </view>
        <view class="contentText">
            <text>{{item.content}}</text>
        </view>
        <image class="contentImage" wx:key="" wx:for="{{item.imageList}}" wx:for-item="val" src="{{val}}" />
    </view>
    <view bind:tap="hideBoard" class="tag-container" wx:if="{{!item.topicId==0}}">
        <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">{{item.topicName}}</l-tag>
        <view class="position-container" wx:if="{{!item.type==0}}">
            <image class="position-img" src="/images/icon/position.png" />
            <text class="position">{{item.province}}{{item.city}}{{item.county}}</text>
        </view>
    </view>
    <view class="line"></view>
    <c-comment-board wx:if="{{!haveComments}}" />
    <c-comment-board wx:if="{{haveComments}}" bind:tap="hideBoard" haveComments="{{haveComments}}" wx:key="{{index}}" wx:for="{{comments}}" comment="{{item}}" />
    <c-comment-input posting="{{posting}}" bind:release="release" thumbsUpNum="{{item.thumbsUpNum}}" praised="{{item.praised}}" commentNum="{{item.commentNum}}" />
    <l-toast />
</view>