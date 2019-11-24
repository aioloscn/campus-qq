<view class="container">
    <view class="recommend-container">
        <view class="personal-container">
            <c-personal url="{{url[0]}}" nickname="{{nickname[0]}}" datetime="{{datetime[0]}}" />
        </view>
        <view class="content">
            <text>跑腿任务：快递</text>
        </view>
        <view class="tag-container">
            <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">跑腿</l-tag>
            <view class="position-container">
                <image class="position-img" src="/images/icon/position.png" />
                <text class="position">成都市金堂县</text>
            </view>
        </view>
        <view class="floor">
            <c-floor commentNums="{{2}}" />
        </view>
    </view>
    <view class="recommend-container">
        <view class="personal-container">
            <c-personal url="{{url[1]}}" nickname="{{nickname[1]}}" datetime="{{datetime[1]}}" />
        </view>
        <view class="content">
            <text>“当你年轻时，以为什么都有答案，可是老了的时候，你可能又觉得其实人生并没有所谓的答案。每天你都有机会和很多人擦身而过，有些人可能会变成你的朋友或者是知己所以我从来没有放弃任何跟人磨擦的机会。有时候搞得自己头破血流，管他呢！开心就行了。”</text>
        </view>
        <view class="tag-container">
            <l-tag plain="{{true}}" shape="circle" font-color="#4983d0">树洞一下</l-tag>
        </view>
        <view class="floor">
            <c-floor commentNums="{{3}}" />
        </view>
    </view>
    <view class="recommend-container">
        <view class="personal-container">
            <c-personal url="{{url[2]}}" nickname="{{nickname[2]}}" datetime="{{datetime[2]}}" />
        </view>
        <view class="content">
            <text>爱情这东西，时间很关键。认识得太早或太晚，都不行。</text>
        </view>
        <view class="floor">
            <c-floor commentNums="{{5}}" />
        </view>
    </view>
</view>