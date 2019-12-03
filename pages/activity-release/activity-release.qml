<view class="container" style="text-align: left;">
    <view class="title-container">
        <text class="title">标题</text>
        <input bindinput="inputTitle" focus="true" />
    </view>
    <l-textarea bind:linconfirm="onConfirm" bind:lininput="inputTextarea" l-class="textarea" border="{{false}}" focus="{{true}}"
                maxlength="-1" indicator="{{false}}" placeholder="发布详细活动或文章，#数字#的形式发布群号链接" />
    <view class="image-container">
        <l-image-picker bind:linchange="pickImage" bind:linremove="removeImage" count="9" size-type="compressed" />
    </view>
    <view class="tag-container">
        <view class="first-tag">
            <l-tag bind:tap="selectTopic" plain="{{true}}" shape="circle" font-color="#4983d0" image="/images/icon/right-arrow.png" l-image-class="arrow" location="right">选择话题</l-tag>
            <text class="line"></text>
        </view>
        <view class="sub-tag-container">
            <l-tag bind:lintap="onTap" cell="{{item}}" plain="{{true}}" shape="circle" font-color="#4983d0" wx:for="{{topics}}">{{item.topicName}}</l-tag>
        </view>
    </view>
    <view bind:tap="onSubmit" class="submit">
        发送
    </view>
    <view wx:if="{{isActivity}}" class="position">
        <image src="/images/icon/position.png" />
        <text>选择活动地址</text>
        <image class="arrow" src="/images/icon/bottom-arrow.png" />
    </view>
    <l-tag wx:if="{{selected}}" l-select-class="selected-tag" select="true" plain="{{true}}" shape="circle" font-color="#ffffff">{{selectedTopicName}}</l-tag>
    <view wx:if="{{openCityPicker}}" class="city-picker">
        <city-picker bind:selected="selectCity"></city-picker>
    </view>
    <l-toast />
</view>