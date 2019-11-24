<view  wx:if="{{!send}}" class="container">
    <view class="title">
        <text>输入手机号</text>
    </view>
    <view class="input-container">
        <input class="phone" type="number" placeholder="请输入您的手机号" auto-focus="true" bindinput="changeInput" value="{{phoneNumber}}" />
        <view bind:tap="onDelete" class="cancel-img-view" wx:if="{{!disabled}}">
            <image  class="cancel-img" src="/images/icon/cancel.png" />
        </view>
    </view>
    <view class="input-bottom"></view>
    <l-button bind:tap="nextStep" l-class="btn" bgColor="{{disabled ? '#e5e8ea' : '#3a90f7'}} " width="670" height="84" disabled="{{disabled}}" loading="{{loading}}">下一步</l-button>
    <text bind:tap="switchAccountLogin">账号密码登录</text>
</view>
<l-toast />
<l-message />
<c-sms wx:if="{{send}}" />