<view  wx:if="{{!send}}" class="container">
    <view wx:if="{{!isAccountLoginIn}}">
        <view class="title">
            <text>输入手机号</text>
        </view>
        <view class="input-container">
            <input class="phone" type="number" maxlength="11" placeholder="请输入您的手机号" auto-focus="true" bindinput="changeInput" value="{{phoneNumber}}" />
            <view bind:tap="onDelete" class="cancel-img-view" wx:if="{{!disabled}}">
                <image  class="cancel-img" src="/images/icon/cancel.png" />
            </view>
        </view>
        <view class="input-bottom"></view>
        <l-button bind:tap="nextStep" l-class="btn" bgColor="{{disabled ? '#e5e8ea' : '#3a90f7'}}" width="670" height="84" disabled="{{disabled}}" loading="{{loading}}">下一步</l-button>
        <text bind:tap="switchAccountLogin">账号密码登录</text>
    </view>
    <view wx:if="{{isAccountLoginIn}}">
        <view class="title">
            <text>账号密码登录</text>
        </view>
        <view class="password-container">
            <view class="input-container">
                <input class="account" type="number" maxlength="11" placeholder="手机号" bindinput="inputAccount" auto-focus="true" value="{{account}}" />
                <view bind:tap="deleteAccount" class="cancel-img-view" wx:if="{{!accountDisabled}}">
                    <image  class="cancel-img" src="/images/icon/cancel.png" />
                </view>
            </view>
            <view class="input-bottom"></view>
            <view class="input-container">
                <input class="password" type="password" minlength="6" maxlength="16" placeholder="密码" bindinput="inputPwd" value="{{password}}" />
                <view bind:tap="deletePwd" class="cancel-img-view" wx:if="{{!passwordDisabled}}">
                    <image  class="cancel-img" src="/images/icon/cancel.png" />
                </view>
            </view>
            <view class="input-bottom"></view>
        </view>
        <l-button bind:tap="signIn" bgColor="{{'#3a90f7'}}" l-class="btn" width="670" height="84" disabled="{{loginDisabled}}" loading="{{loggingIn}}">登录</l-button>
        <text bind:tap="switchCodeLogin">验证码登录</text>
    </view>
</view>
<l-toast />
<l-message />
<c-sms wx:if="{{send}}" />