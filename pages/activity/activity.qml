<view class="container">
    <c-fakeSearch wx:if="{{!searching}}" bind:onSearching="onSearching" />
    <c-search wx:if="{{searching}}" bind:onCancel="onCancel" />
    <view  class="fakeSearch"></view>
    <view wx:if="{{!searching}}" class="article-container" wx:key="{{index}}" wx:for="{{activity}}">
        <view>
            <view class="personal-container">
                <image class="head-portrait" src="{{item.headPortrait}}" />
                <view class="message-top">
                    <text class="nickname">{{item.nickname}}</text>
                    <text class="datetime">{{item.dateInterval}}</text>
                </view>
            </view>
            <c-activity-content item="{{item}}" />
            <view class="floor">
                <c-thumbs-up praiseNum="{{item.praiseNum}}" />
                <c-comment commentNum="{{item.commentNum}}" />
            </view>
        </view>
    </view>
</view>
<c-suspensionBall bind:tapReleaseBtn="tapReleaseBtn" ball-class="ball-container" buttonTop="{{buttonTop}}" buttonLeft="{{buttonLeft}}"
                  windowWidth="{{windowWidth}}" windowHeight="{{windowHeight}}" isHidden="{{isHidden}}">
    <image slot="img" class="img" src="/images/icon/menu-activity.png" />
</c-suspensionBall>