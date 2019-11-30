<wxs src="../../utils/tool.wxs" module="tool" />

<view class="container">
    <view class="personal-container">
        <c-personal url="{{item.headPortrait}}" nickname="{{item.nickname}}" datetime="{{item.dateInterval}}"
                    oneself="{{tool.oneself(currentUserId, item.fromUid)}}" currentUserId="{{currentUserId}}"
                    followed="{{item.followed}}" fromUid="{{item.fromUid}}" />
    </view>
    <view class="content">
        <view class="contentText">
            <text>{{item.content}}</text>
        </view>
        <image class="contentImage" wx:key="" wx:for="{{item.imageList}}" wx:for-item="val" src="{{val}}" />
    </view>
    <view class="tag-container" wx:if="{{!item.topicId==0}}">
        <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">{{item.topicName}}</l-tag>
        <view class="position-container" wx:if="{{!item.type==0}}">
            <image class="position-img" src="/images/icon/position.png" />
            <text class="position">{{item.province}}{{item.city}}{{item.county}}</text>
        </view>
    </view>

    <view class="post-container" wx:if="{{!posting}}">
        <view bind:tap="onFakePost" class="post-fake">
            <text>输入评论...</text>
        </view>
        <view class="like-container">
            <c-thumbs-up praiseNum="{{18}}" />
            <c-comment commentNum="{{22}}" />
        </view>
    </view>
    <view class="posting-container" wx:if="{{posting}}">
        <input bind:confirm="onPost" focus="{{posting}}" class="post" placeholder="输入评论..."></input>
    </view>
</view>