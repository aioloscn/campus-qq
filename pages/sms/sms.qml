<view class="container">
    <view wx:if="{{!registered}}">
        <view class="title">
            <text>输入短信验证码</text>
        </view>
        <text class="phone">已向您的手机 {{phoneNumber}} 发送验证码</text>
        <view class="code-container">
            <view wx:key="{{index}}" wx:for="{{dataSource}}" class="code">
                <input bind:tap="onTapFocus" type="number" value="{{item.initValue}}" disabled />
            </view>
            <input type="number" maxlength="6" auto-focus="true" focus="{{isFocus}}" class="hidden-input" bindinput="onInput" />
        </view>
        <text wx:if="{{!resend}}" bind:tap="resend">重新发送短信验证码</text>
        <text wx:if="{{resend}}">重新发送 {{second}}s</text>
    </view>
    <view wx:if="{{registered}}">
        <view class="title">
            <text>输入密码</text>
        </view>
        <view class="password-container">
            <view class="input-container">
                <input class="password" type="password" maxlength="16" placeholder="密码，长度6-16位" bindinput="inputPwd" auto-focus="true" value="{{password}}" />
                <view bind:tap="deletePwd" class="cancel-img-view" wx:if="{{!disabled1}}">
                    <image  class="cancel-img" src="/images/icon/cancel.png" />
                </view>
            </view>
            <view class="input-bottom"></view>
            <view class="input-container">
                <input class="password" type="password" maxlength="16" placeholder="确认密码" bindinput="inputConfirmPwd" value="{{confirmPassword}}" />
                <view bind:tap="deleteConfirmPwd" class="cancel-img-view" wx:if="{{!disabled2}}">
                    <image  class="cancel-img" src="/images/icon/cancel.png" />
                </view>
            </view>
            <view class="input-bottom"></view>
        </view>
        <l-button bind:tap="onRegister" bgColor="{{'#3a90f7'}} " width="670" height="84" loading="{{registering}}">下一步</l-button>
    </view>
</view>
<l-toast show="{{loading}}" icon="loading" tille="重新发送中" />
<l-message />