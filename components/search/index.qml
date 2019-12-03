<view class="container">
    <view class="header">
        <view class="search-container">
            <image class="icon" src="/images/icon/search.png" />
            <input bind:confirm="onConfirm" value="{{q}}" placeholder-class="in-bar" placeholder="搜索活动、标签" class="bar" auto-focus="true" />
            <view bind:tap="onDelete" class="cancel-img-view">
                <image  class="cancel-img" src="/images/icon/cancel.png" />
            </view>
        </view>
        <view bind:tap="onCancel" class="cancel">取消</view>
    </view>

    <view>
        <view class="history">
            <view class="title">
                <view class="chunk"></view>
                <text>历史搜索</text>
            </view>
            <view class="tags">
                <block wx:key="" wx:for="{{historyWords}}">
                    <l-tag bind:tapping="onConfirm" text="树洞一下" />
                </block>
            </view>
        </view>
        <view class="history hot-search">
            <view class="title">
                <view class="chunk"></view>
                <text>热门搜索</text>
            </view>
            <view class="tags">
                <block wx:key="" wx:for="{{hotWords}}">
                    <l-tag bind:tapping="onConfirm" text="{{item}}" />
                </block>
            </view>
        </view>
    </view>
</view>