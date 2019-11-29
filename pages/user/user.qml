<view class="container">
    <image class="bg" src="/images/user/campus-bg1.png" />
    <view wx:if="{{!authorized}}" class="head-portrait-container head-portrait-btn">
        <l-button special="{{true}}" open-type="getUserInfo" bind:getuserinfo="getUserInfo">
            <image class="head-portrait" src="/images/logo/campus-logo.png" />
        </l-button>
        <!--<l-button special="{{true}}" bind:tap="onTap">
            <image class="head-portrait" src="/images/logo/campus-logo.png" />
        </l-button>-->
        <text wx:if="{{!loggedIn}}">登录/注册</text>
    </view>
    <view wx:if="{{authorized}}" class="head-portrait-container head-portrait-btn">
        <image class="head-portrait" src="{{userInfo.headPortrait}}" />
        <text>{{userInfo.nickname}}</text>
    </view>
    <view class="about">
        <view class="follow-container">
            <view class="follows">
                <text class="nums">5</text>
                <text class="text">关注</text>
            </view>
            <view class="follows">
                <text class="nums">1</text>
                <text class="text">粉丝</text>
            </view>
        </view>
        <view class="btn-container">
            <view class="btn">
                <image class="record-img" src="/images/icon/record.png" />
                <text>发布记录</text>
            </view>
            <view class="btn">
                <image class="activity-manage-img" src="/images/icon/activity-manage.png" />
                <text>活动管理</text>
            </view>
            <view class="btn">
                <image class="btn-img" src="/images/icon/activity-history.png" />
                <text>活动历史</text>
            </view>
            <view class="btn">
                <image class="btn-img" src="/images/icon/comment.png" />
                <text>评论</text>
            </view>
            <view class="btn">
                <image class="integral-img" src="/images/icon/integral.png" />
                <text>积分</text>
            </view>
            <view class="btn" bind:tap="onSetting">
                <image class="setting-img" src="/images/icon/setting.png" />
                <text>设置</text>
            </view>
            <view class="btn">

            </view>
            <view class="btn">

            </view>
        </view>
    </view>
</view>