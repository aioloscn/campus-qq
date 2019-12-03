<view class="content-container" item="{{item}}" bindtap="entryContent">
    <l-card l-class="card" type="primary" position="left" plaintext="{{item.plaintext}}" image="{{item.firstImage}}">
        <view class="title-container">
            <text class="title">{{item.title}}</text>
        </view>
        <view class="article">
            <text>{{item.content}}</text>
        </view>
    </l-card>
</view>